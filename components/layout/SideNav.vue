<script setup lang="ts">
const { $screens } = useNuxtApp();

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);
const menu = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>
<template>
  <n-drawer v-if="!$screens.sm" v-model:show="menu" width="100%">
    <n-drawer-content closable header-style="border:none">
      <n-list clickable hoverable>
        <n-list-item
          @click="
            menu = !menu;
            scrollSection('lsm');
          "
          class="text-center"
        >
          LMS
        </n-list-item>
        <n-list-item
          @click="
            menu = !menu;
            scrollSection('about');
          "
          class="text-center"
        >
          Acerca de
        </n-list-item>
        <n-list-item
          @click="
            menu = !menu;
            scrollSection('contact');
          "
          class="text-center"
        >
          Contacto
        </n-list-item>
      </n-list>
    </n-drawer-content>
  </n-drawer>
</template>
