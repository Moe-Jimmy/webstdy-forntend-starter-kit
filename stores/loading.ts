import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    isGlobalLoading: false,
  }),
  actions: {
    startLoading() {
      this.isGlobalLoading = true;
    },
    stopLoading() {
      this.isGlobalLoading = false;
    },
  },
});
