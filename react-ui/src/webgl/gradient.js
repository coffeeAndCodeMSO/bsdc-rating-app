const THREE = require('three');

class Gradient {
  constructor() {
    this.clock = new THREE.Clock();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
      this.width / - 2,
      this.width / 2,
      this.height / 2,
      this.height / - 2,
      1,
      1000
    );

    this.camera.position.z = 1.0;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);

    this.gradientUniforms = {
      color1: {value: [0.0980392, 0.0980392, 0.439216, 1.0]}, //midnight blue
      color2: {value: [0, 0.807843, 0.819608, 1.0]}, //dark turquoise
      time: {value: this.clock.getElapsedTime()}
    }

    document.body.appendChild(this.renderer.domElement);

    this.renderer.domElement.classList.add('background');

    var planeGeometry = new THREE.PlaneBufferGeometry(2, 2);

    var shader = new THREE.ShaderMaterial({
      uniforms: this.gradientUniforms,
      vertexShader: `varying vec2 vUv;
        void main(){
        vUv = uv;
        gl_Position = vec4( position, 1.0 );
        }`,
      fragmentShader: `uniform vec4 color1;
        uniform vec4 color2;
        uniform float time;

        varying vec2 vUv;

        vec4 generateGradient(vec4 c1, vec4 c2, vec2 uv){
          vec4 c = mix(c1, c2, uv.x + uv.y - 2.0 * uv.x * uv.y);
          return c;
        }

        /**********************************/
        void main(){
          vec2 uv = vUv;
          vec4 color;

          float noise;

          uv = vec2(uv.x * (cos(time)+1.0)/2.0,uv.y * (sin(time)+1.0)/2.0);
          color = generateGradient(color1,color2,uv);

          gl_FragColor = color;
        }`
    })

    var plane = new THREE.Mesh(planeGeometry, shader);
    this.scene.add(plane);
  }

  animate() {
    var self = this;

    requestAnimationFrame(self.animate.bind(self));
    this.gradientUniforms.time.value=this.clock.getElapsedTime();

    this.renderer.render(this.scene, this.camera);
  };

  generateColors(colors) {
    if(colors == null) {
      var hue_1 = (Math.random() * 0.3) + 0.5;
      var hue_2 = (Math.random() * 0.3) + 0.5;

      while (Math.abs(hue_1 - hue_2) < 0.15) {
        hue_2 = (Math.random() * 0.3) + 0.5;
      }

      var c1 = new THREE.Color().setHSL(hue_1, 1.0, 0.5);
      var c2 = new THREE.Color().setHSL(hue_2, 1.0, 0.5);

      this.gradientUniforms.color1 = {value: [c1.toArray()[0],c1.toArray()[1],c1.toArray()[2],1.0]};
      this.gradientUniforms.color2 = {value: [c2.toArray()[0],c2.toArray()[1],c2.toArray()[2],1.0]};
    } else {
      var c_1 = new THREE.Color(colors.color1);
      var c_2 = new THREE.Color(colors.color2);
      console.log(c_1);
      this.gradientUniforms.color1 = {value: [c_1.toArray()[0],c_1.toArray()[1],c_1.toArray()[2],1.0]};
      this.gradientUniforms.color2 = {value: [c_2.toArray()[0],c_2.toArray()[1],c_2.toArray()[2],1.0]};
    }
  }
}

module.exports = {
  Gradient
}
