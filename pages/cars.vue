<script setup lang="ts">
import type { ApiResponse } from "~/types/ApiRespones";
import type { ICar } from "~/types/Car";
const api = useApi();
const cars = ref<ICar[]>([]);
const getAllCars = async () => {
  const respons = await api.get<ApiResponse<ICar[]>>("filterCar");
  if (respons) {
    cars.value = respons.data;
  } else {
    cars.value = [];
  }
  return cars;
};
getAllCars();
</script>
<template>
  <div
    class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
  >
    <Card v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>
<style scoped></style>
