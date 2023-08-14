import { PerspectiveCamera, WebGLRenderer } from 'three';

export interface ParamsWindowResizer {
  container: HTMLElement;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
}

export const createWindowResizer = ({
  container,
  camera,
  renderer,
}: ParamsWindowResizer) => {
  camera.aspect = container.clientWidth / container.clientHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);

  renderer.setPixelRatio(window.devicePixelRatio);
};
