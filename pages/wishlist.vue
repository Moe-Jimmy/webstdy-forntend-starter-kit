<template>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5"
  >
    <ProductsProductCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import type { IWishlist } from "~/types/wishlistRespones";
import type { ICar } from "~/types/Car";

const wishlist = useWishlistStore();
const existIds: number[] = wishlist.wishlistIds;
const cars = ref<ICar[]>([]);
const api = useApi();

const getUserWishlist = async () => {
  const respons = await api.post<IWishlist>("add-favorite-withoutauth", {
    car_ids: [...existIds],
  });

  if (respons.data.unavailiable_ids.length) {
    wishlist.removeFromWishlist(respons.data.unavailiable_ids);
  }
  console.log(respons);
  if (respons) {
    cars.value = respons.data.cars;
    console.log(cars.value);
  } else {
    cars.value = [];
  }
  return cars;
};
onMounted(() => {
  getUserWishlist();
});

watch(
  () => wishlist.wishlistIds,
  () => {
    getUserWishlist();
  }
);
</script>

<style scoped></style>
