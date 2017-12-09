var clock = new THREE.Clock();
var width = window.innerWidth;
var height = window.innerHeight;
var scene, camera, renderer;
var gradientUniforms;

/******************************************************************************/
function init() {
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(
    width / - 2,
    width / 2,
    height / 2,
    height / - 2,
    1,
    1000
  );

  camera.position.z = 1.0;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  renderer.domElement.classList.add('background');


  var planeGeometry = new THREE.PlaneBufferGeometry(2, 2);

  gradientUniforms = {
    color1: {value: [0.43, 0.74, 0.99, 1.0]},
    color2: {value: [1.0, 0.15, 0.99, 1.0]},
    time: {value: clock.getElapsedTime()}
  }

  var shader = new THREE.ShaderMaterial({
    uniforms: gradientUniforms,
    vertexShader: document.getElementById("gradient_vert").textContent,
    fragmentShader: document.getElementById("gradient_frag").textContent
  })

  var plane = new THREE.Mesh(planeGeometry, shader);
  scene.add(plane);
}

/******************************************************************************/
function animate() {
  requestAnimationFrame(animate);
  gradientUniforms.time.value=clock.getElapsedTime();

  renderer.render(scene, camera);
};

/******************************************************************************/
init();
animate();
