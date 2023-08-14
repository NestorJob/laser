<script setup lang="ts">
import Banner from '@/components/layout/Banner.vue';
import Footer from '@/components/layout/Footer.vue';
import Bubbles from '~~/components/three/Bubbles.vue';
</script>
<template>
  <div class="min-h-screen flex flex-col dark:bg-black">
    <Bubbles />
    <Banner />
    <div class="content flex flex-col">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.content {
  flex: 1 0 auto;
}
</style>
