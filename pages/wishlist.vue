<template>
  <div></div>
</template>

<script setup lang="ts">
import type { IWishlist } from "~/types/wishlistRespones";

const wishlist = useWishlistStore();
const existIds: number[] = wishlist.wishlistIds;
const api = useApi();

const getUserWishlist = async () => {
  const respons = await api.post<IWishlist>("add-favorite-withoutauth", {
    car_ids: [...existIds],
  });
  console.log(respons);
  if (respons.data.unavailiable_ids.length) {
  }
};
getUserWishlist();
</script>

<style scoped></style>
