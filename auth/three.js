import * as THREE from "three";

//Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;
scene.add(camera);

//light 
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(5,5, 0);
scene.add(light);

//Geomtry
const geometry = new THREE.SphereGeometry();

//Texture
const texture = new THREE.TextureLoader().load("images/Earth.jpg");

//Mesh
const mesh = new THREE.MeshStandardMaterial({map: texture});

//Object
const sphere = new THREE.Mesh(geometry, mesh);
scene.add(sphere);

//Animate
function animation()
{
    requestAnimationFrame(animation);

    // sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animation();