import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';


let scene, camera, renderer;
function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color('#E7EAEF');

    camera = new THREE.PerspectiveCamera(40,window.innerHeight/window.innerHeight,1,5000);

    hlight = new THREE.AmbientLight (0x404040, 100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementsByClassName('model').appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        scene.add(gltf.scene);
        renderer.render(scene,camera);

    })


};


init();