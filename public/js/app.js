'use strict';

var BjsApp = BjsApp || {};
BjsApp.init = function (coordinatesArr) {
// this.onmessage = function (e) {
    var canvas = document.getElementById('render');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
    camera.attachControl(canvas);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    var sphereArr = [{x: 5.275849586747564, y: 3.123647586958476, z: 8.123456789123456}, {x: 1, y: 1, z: 1}, {x: 2, y: 2, z: 2}, {x: 3, y: 3, z: 3}, {x: -1, y: -1, z: -1}, {x: -5, y: -2, z: -4}, {x: 5, y: 2, z: 4}];
    sphereArr.forEach(function (coordinates) {
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 1, scene);
        sphere.position.x = coordinates.x;
        sphere.position.y = coordinates.y;
        sphere.position.z = coordinates.z;
        engine.runRenderLoop(function () {
            scene.render();
        });
    });
    // this.postMessage({result: 'BABYLONJS'});
};
