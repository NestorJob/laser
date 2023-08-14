import 'naive-ui/volar';

type Screens = globalThis.Ref<{
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}>;

declare module '#app' {
  interface NuxtApp {
    $screens: Screens;
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $screens: Screens;
  }
}

declare module '*.png' {
  const value: any;
  export default value;
}
