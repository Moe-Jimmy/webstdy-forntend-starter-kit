<script setup lang="ts">
import type { IWishlist } from "~/types/wishlistRespones";
import type { ICar } from "~/types/Car";

const wishlist = useWishlistStore();
const cars = ref<ICar[]>([]);
const api = useApi();
const localePath = useLocalePath();
// Get user wishlist
const getUserWishlist = async () => {
  const respons = await api.post<IWishlist>("add-favorite-withoutauth", {
    car_ids: [...wishlist.wishlistIds],
  });

  if (respons.data.unavailiable_ids.length) {
    wishlist.removeUnavailable(respons.data.unavailiable_ids);
  }
  console.log(respons);
  if (respons) {
    cars.value = respons.data.cars;
  } else {
    cars.value = [];
  }
  return cars.value;
};

onMounted(() => {
  getUserWishlist();
});

watch(
  () => wishlist.wishlistIds,
  () => {
    getUserWishlist();
  },
  {
    immediate: false,
    flush: "post",
  },
);
</script>
<template>
  <div
    v-if="useLoadingStore().isGlobalLoading"
    class="text-center text-gray-500"
  >
    <p class="text-lg">{{ $t("loading") }}</p>
  </div>

  <div
    v-else-if="cars.length"
    class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
  >
    <Card v-for="car in cars" :key="car.id" :car="car" />
  </div>

  <div v-else class="text-center text-gray-500">
    <p class="text-lg">{{ $t("wishlistEmpty") }}</p>
    <NuxtLink :to="localePath('/')" class="text-blue-500 hover:underline">{{
      $t("goBackHome")
    }}</NuxtLink>
  </div>
</template>

<style scoped></style>
