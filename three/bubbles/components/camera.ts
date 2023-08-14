import { PerspectiveCamera } from 'three';

export const createCamera = (container: HTMLElement): PerspectiveCamera => {
  const camera = new PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    1,
    4000,
  );

  camera.position.z = 1750;

  return camera;
};
