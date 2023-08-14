import { DirectionalLight } from 'three';

export const createLights = (): DirectionalLight => {
  const light: DirectionalLight = new DirectionalLight('white', 8);

  light.position.set(10, 10, 10);

  return light;
};
