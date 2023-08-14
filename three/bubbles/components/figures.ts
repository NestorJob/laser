import {
  BufferGeometry,
  TextureLoader,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
} from 'three';

export const createFigure = async (): Promise<
  Points<BufferGeometry, PointsMaterial>
> => {
  const geometry = new BufferGeometry();
  const vertices = [];
  const sprite = new TextureLoader().load('three/textures/sprites/laser.png');

  for (let i = 0; i < 300; i++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

  const material = new PointsMaterial({
    size: 50,
    sizeAttenuation: true,
    map: sprite,
    alphaTest: 0.5,
    transparent: true,
    color: '#fff',
  });

  const particles = new Points(geometry, material);

  return particles;
};
