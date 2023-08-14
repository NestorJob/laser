<template>
  <div class="flex flex-col items-center">
    <div class="w-full" :class="contentClass" :style="{ maxWidth: screens.lg }">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ contentClass?: string }>();
</script>
