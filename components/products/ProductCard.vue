<template>
  <UCard>
    <template #header>
      {{ car.car_name }}
    </template>

    <template #footer>
      <ProductsWishlistBtn :car-id="car.id" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  car: { id: number; car_name: string };
}>();
</script>

<style scoped></style>
