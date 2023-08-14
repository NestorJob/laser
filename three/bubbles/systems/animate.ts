import { Points, BufferGeometry, PointsMaterial } from 'three';

export const createAnimate = (
  figure: Points<BufferGeometry, PointsMaterial>,
) => {
  figure.rotation.x += 0.001;
  figure.rotation.y += 0.001;
  figure.rotation.z += 0.001;
};
