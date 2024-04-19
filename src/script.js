import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// helpers
const gridHelper = new THREE.GridHelper(10, 10, 0x0000ff, 0x808080)
gridHelper.position.y = -0.5
scene.add(gridHelper)

const axisHeler = new THREE.AxesHelper(1)
scene.add(axisHeler)

// ambient light
scene.add(new THREE.AmbientLight(0x666666))

// point light
const pointLight = new THREE.PointLight(0xffffff, 10, 0, 0);
pointLight.position.set(1, 2, -3)
scene.add(pointLight);

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 2
camera.position.z = 3
scene.add(camera)


/**
 * Cube
 */
const cubeGeo = new THREE.BoxGeometry(1, 1, 1)
const cubeMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.5,
    side: THREE.DoubleSide,
    transparent: true
})
const cube = new THREE.Mesh(cubeGeo, cubeMat)
scene.add(cube)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// Controls
const orbitCtrl = new OrbitControls(camera, canvas)
orbitCtrl.enableDamping = true

// transform control
const tfCtrl = new TransformControls(camera, renderer.domElement)
tfCtrl.addEventListener('change', renderer.render(scene, camera))
tfCtrl.addEventListener('dragging-changed', function(event) {
    orbitCtrl.enabled = !event.value
})
tfCtrl.attach(cube) // not working... 
scene.add(tfCtrl)


/**
 * Animate
 */
const clock = new THREE.Clock()
let lastElapsedTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - lastElapsedTime
    lastElapsedTime = elapsedTime

    // rotate cube
    cube.rotation.x += 0.005
    cube.rotation.y += 0.005
    cube.rotation.z += 0.005

    // Update controls
    orbitCtrl.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
