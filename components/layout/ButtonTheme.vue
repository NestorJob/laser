<template>
  <n-button quaternary circle @click="globalStore.theme = !globalStore.theme">
    <n-icon :size="25">
      <DarkTheme20Filled />
    </n-icon>
  </n-button>
</template>
<script setup lang="ts">
import useGlobalStore from '~~/stores/useGlobalStore';
import DarkTheme20Filled from '@vicons/fluent/DarkTheme20Filled';

const globalStore = useGlobalStore();
</script>
