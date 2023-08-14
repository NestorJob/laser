<script setup lang="ts">
import { dateEsAR, esAR, GlobalThemeOverrides } from 'naive-ui';
import { darkTheme } from 'naive-ui';
import useGlobalStore from '~~/stores/useGlobalStore';

const globalStore = useGlobalStore();

const globalThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: colors.primary[500],
    primaryColorHover: colors.primary[600],
    primaryColorPressed: colors.primary[400],
    infoColor: colors.info[500],
    infoColorHover: colors.info[600],
    infoColorPressed: colors.info[400],
    successColor: colors.success[500],
    successColorHover: colors.success[600],
    successColorPressed: colors.success[400],
    warningColor: colors.warning[500],
    warningColorHover: colors.warning[600],
    warningColorPressed: colors.warning[400],
    errorColor: colors.error[500],
    errorColorHover: colors.error[600],
    errorColorPressed: colors.error[400],
  },
};
</script>

<template>
  <Html :class="`${globalStore.theme ? 'dark' : ''}`">
    <n-config-provider
      :theme-overrides="globalThemeOverrides"
      :locale="esAR"
      :date-locale="dateEsAR"
      :theme="globalStore.theme ? darkTheme : null"
    >
      <n-message-provider>
        <NuxtLayout>
          <slot />
        </NuxtLayout>
      </n-message-provider>
    </n-config-provider>
  </Html>
</template>
