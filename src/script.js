import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

import { Reflector } from 'three/addons/objects/Reflector.js'

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
scene.add(gridHelper)

const axisHeler = new THREE.AxesHelper(1)
scene.add(axisHeler)

// ambient light
scene.add(new THREE.AmbientLight(0xffffff))

// point light
// const pointLight = new THREE.PointLight(0xffffff, 10, 0, 0);
// pointLight.position.set(1, 2, -3)
// scene.add(pointLight);


// rect area light
RectAreaLightUniformsLib.init()

const rectLight_1 = new THREE.RectAreaLight(0xff0000, 5, 4, 10)
rectLight_1.position.set(-5, 4, -5)
rectLight_1.lookAt(0, 4, -5)
scene.add(rectLight_1)

const rectLight_2 = new THREE.RectAreaLight(0x00ff00, 5, 4, 10)
rectLight_2.position.set(-5, 4, 0)
rectLight_2.lookAt(0, 4, 0)
scene.add(rectLight_2)

const rectLight_3 = new THREE.RectAreaLight(0x0000ff, 5, 4, 10)
rectLight_3.position.set(-5, 4, 5)
rectLight_3.lookAt(0, 4, 5)
scene.add(rectLight_3)

scene.add(new RectAreaLightHelper(rectLight_1));
scene.add(new RectAreaLightHelper(rectLight_2));
scene.add(new RectAreaLightHelper(rectLight_3));


// floor
// const geoFloor = new THREE.BoxGeometry(10, 1, 10);
const geoFloor = new THREE.CircleGeometry(50, 50);
// const matStdFloor = new THREE.MeshStandardMaterial({
//     color: 0xbcbcbc,
//     roughness: 0.1,
//     metalness: 0,
// });
// const mshStdFloor = new THREE.Mesh(geoFloor, matStdFloor);

const floorMirror = new Reflector(
    geoFloor,
    {
        clipBias: 0.001,
        textureWidth: window.innerWidth * window.devicePixelRatio,
        textureHeight: window.innerHeight * window.devicePixelRatio,
        color: 0xffffff
    }
)
// mshStdFloor.position.y = -1;
// scene.add(mshStdFloor);

floorMirror.position.y = -0.5;
floorMirror.rotateX(-Math.PI / 2)
scene.add(floorMirror);


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
)
camera.position.set(6, 0, 4)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Cube
 */
const cubeGeo = new THREE.BoxGeometry(1, 1, 1)
// const cubeMat = new THREE.MeshLambertMaterial({
//     color: 0xffa500,
//     opacity: 0.5,
//     side: THREE.DoubleSide,
//     transparent: true
// })
const cubeMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0,
    metalness: 0,
})
const cube = new THREE.Mesh(cubeGeo, cubeMat)
// cube.position.y = 1
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

    // rotate rectLight_2
    // rectLight_2.position.x += Math.sin(Math.PI * 0.01)
    // rectLight_2.position.z += Math.sin(Math.PI * 0.01)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
