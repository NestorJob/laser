<template>
  <footer>
    <Container
      class="bg-secondary-50 dark:bg-secondary-900 z-10 relative"
      contentClass="p-xs flex justify-end items-center space-x-xs"
    >
      <a target="_blank" href="https://www.facebook.com/StudioLSMex">
        <n-button circle quaternary>
          <n-icon :size="25">
            <LogoFacebook />
          </n-icon>
        </n-button>
      </a>
      <a target="_blank" href="https://www.instagram.com/studiolsm_">
        <n-button circle quaternary>
          <n-icon :size="25">
            <LogoInstagram />
          </n-icon>
        </n-button>
      </a>
      <a target="_blank" href="https://www.youtube.com/lasershowmexico">
        <n-button circle quaternary>
          <n-icon :size="25">
            <LogoYoutube />
          </n-icon>
        </n-button>
      </a>
    </Container>
    <Container
      class="bg-info-50 dark:bg-info-900 z-10 relative"
      contentClass="flex justify-center"
    >
      <p class="text-center p-xs max-w-xs text-body3">
        Derechos Reservados Lasershowmexico / Studio LSM / LasersMex 2016-2023
      </p>
    </Container>
  </footer>
</template>
<script setup lang="ts">
import Container from '~~/components/base/Container.vue';
import LogoFacebook from '@vicons/ionicons5/LogoFacebook';
import LogoInstagram from '@vicons/ionicons5/LogoInstagram';
import LogoYoutube from '@vicons/ionicons5/LogoYoutube';
</script>
