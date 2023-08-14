<template>
  <div
    className="w-screen h-screen fixed inset-0 pointer-events-none"
    ref="container"
    id="bubbles"
  />
</template>
<script setup lang="ts">
import Bubbles3D from '~~/three/bubbles';
import gsap from 'gsap';

const container = ref<HTMLElement>(null as any);

onMounted(() => {
  gsap.fromTo(
    '#bubbles',
    {
      opacity: 0,
      x: '-100%',
    },
    {
      duration: 1,
      opacity: 1,
      x: 0,
    },
  );

  const torus = new Bubbles3D(container.value);

  onBeforeUnmount(() => {
    torus.destroyResizer();
  });
});
</script>
