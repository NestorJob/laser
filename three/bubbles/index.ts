import { createCamera } from './components/camera';
import { createFigure } from './components/figures';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { createRenderer } from './systems/renderer';
import { createControls } from './systems/controls';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  DirectionalLight,
  Points,
  BufferGeometry,
  PointsMaterial,
} from 'three';
import { createWindowResizer } from './systems/resizer';
import { createAnimate } from './systems/animate';

export default class Bubbles3D {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private figure: Points<BufferGeometry, PointsMaterial> = new Points();
  private ligthts: DirectionalLight;

  constructor(private container: HTMLElement) {
    this.camera = createCamera(container);
    this.renderer = createRenderer();
    this.scene = createScene();
    this.ligthts = createLights();
    this.container.append(this.renderer.domElement);
    createFigure().then((figure) => {
      this.addFigures(figure);
      //this.controls();
      this.animate();
      this.resizer();
      this.render();
    });
  }

  public destroyResizer() {
    window.removeEventListener('resize', this.windowResizer, false);
  }

  private resizer() {
    this.windowResizer();
    window.addEventListener('resize', this.windowResizer, false);
  }

  private windowResizer = () => {
    createWindowResizer({
      container: this.container,
      camera: this.camera,
      renderer: this.renderer,
    });
  };

  private addFigures(figure: Points<BufferGeometry, PointsMaterial>) {
    this.figure = figure;
    this.scene.add(this.figure, this.ligthts);
  }

  private controls() {
    createControls(this.camera, this.renderer);
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    createAnimate(this.figure);
    this.render();
  };

  private render() {
    this.renderer.render(this.scene, this.camera);
  }
}
