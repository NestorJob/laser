import { WebGLRenderer, sRGBEncoding } from 'three';

export const createRenderer = () => {
  const renderer = new WebGLRenderer({ alpha: true });

  renderer.physicallyCorrectLights = true;

  renderer.outputEncoding = sRGBEncoding;

  return renderer;
};
