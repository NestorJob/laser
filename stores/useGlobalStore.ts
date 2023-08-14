import { defineStore } from 'pinia';

const useGlobalStore = defineStore('global', {
  state: () => ({ theme: true }),
  persist: true,
});

export default useGlobalStore;
