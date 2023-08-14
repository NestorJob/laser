<script setup lang="ts">
import Container from '@/components/base/Container.vue';
import ButtonTheme from './ButtonTheme.vue';
import FlashOutline from '@vicons/ionicons5/FlashOutline';
import MenuButton from '../base/MenuButton.vue';
import SideNav from './SideNav.vue';

const { $screens } = useNuxtApp();
const route = useRoute();

const menu = ref(false);
</script>
<template>
  <Container class="z-50 bg-info-50 dark:bg-info-900 sticky top-0">
    <div class="flex justify-between items-center p-xs">
      <NuxtLink to="/">
        <n-button text class="pointer-events-none">
          <n-icon size="50">
            <FlashOutline />
          </n-icon>
        </n-button>
      </NuxtLink>

      <div class="space-x-xs flex items-center">
        <ButtonTheme />
        <template v-if="route.path === '/'">
          <MenuButton v-if="!$screens.sm" @click="menu = !menu" />
          <template v-else>
            <n-button quaternary size="large" @click="scrollSection('lsm')">
              LSM
            </n-button>
            <n-button quaternary size="large" @click="scrollSection('about')">
              Acerca de
            </n-button>
            <n-button quaternary size="large" @click="scrollSection('contact')">
              Contacto
            </n-button>
          </template>
        </template>
      </div>
    </div>
  </Container>
  <SideNav v-if="route.path === '/'" v-model="menu" />
</template>
