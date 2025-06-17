import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlistIds: [] as number[],
  }),
  actions: {
    toggle(id: number) {
      if (this.wishlistIds.includes(id)) {
        this.wishlistIds = this.wishlistIds.filter((item) => item !== id);
      } else {
        this.wishlistIds.push(id);
      }
      this.saveToStorage();
    },
    isFavorite(id: number) {
      return this.wishlistIds.includes(id);
    },
    loadFromStorage() {
      const stored = localStorage.getItem("wishlistIds");
      if (stored) {
        this.wishlistIds = JSON.parse(stored);
      }
    },
    saveToStorage() {
      localStorage.setItem("wishlistIds", JSON.stringify(this.wishlistIds));
    },
  },
});
