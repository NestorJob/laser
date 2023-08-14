export default defineNuxtPlugin(async () => {
  const calcScreens = () => {
    return {
      xs: parseInt(screens.xs) <= window.innerWidth,
      sm: parseInt(screens.sm) <= window.innerWidth,
      md: parseInt(screens.md) <= window.innerWidth,
      lg: parseInt(screens.lg) <= window.innerWidth,
    };
  };
  const $screens = ref(calcScreens());
  window.addEventListener('resize', () => {
    $screens.value = calcScreens();
  });

  return {
    provide: {
      screens: $screens,
    },
  };
});
