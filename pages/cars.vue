<template>
  <div class="grid grid-cols-5 gap-3">
    <ProductsProductCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse } from "~/types/ApiRespones";

interface Car {
  id: number;
  car_name: string;
}
const api = useApi();
const cars = ref<Car[]>([]);
const getAllCars = async () => {
  const respons = await api.get<ApiResponse<Car[]>>("getAllCars");
  if (respons) {
    cars.value = respons.data;
  } else {
    cars.value = [];
  }
  return cars;
};
getAllCars();
</script>

<style scoped></style>
