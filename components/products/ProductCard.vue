<template>
  <UCard
    :ui="{ header: 'p-0 sm:px-0', footer: 'p-0 sm:px-0' }"
    class="cursor-pointer"
  >
    <!-- header  -->
    <template #header>
      <figure class="p-4">
        <img
          :src="car.image"
          :alt="car.name"
          class="w-full block h-[200px] object-contain"
        />
      </figure>
    </template>
    <div class="flex justify-between items-center">
      <ProductsWishlistBtn :car-id="car.id" />
      <div
        class="bg-primary text-second-dark px-3 py-2 text-sm rounded-lg"
        v-if="car.model"
      >
        {{ car.model }}
      </div>
    </div>
    <!-- title  -->
    <h2 class="line-clamp-2 h-[60px] my-3 text-[20px] font-medium">
      {{ car.name }}
    </h2>
    <!-- description  -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex items-center gap-3" v-if="car.year">
        <UIcon
          name="i-material-symbols:calendar-month-outline"
          class="text-3xl"
        />
        <span class="text-sm">{{ car.year }}</span>
      </div>
      <div class="flex items-center gap-3" v-if="car.brand">
        <UIcon name="i-mdi:car-side" class="text-3xl" />
        <span class="text-sm">{{ car.brand }}</span>
      </div>
      <div class="flex items-center gap-3" v-if="car.fuel_type">
        <UIcon name="i-tabler:engine" class="text-3xl" />
        <span class="text-sm">{{ car.fuel_type }}</span>
      </div>
      <div class="flex items-center gap-3" v-if="car.gear_shifter">
        <UIcon name="i-hugeicons:gears" class="text-3xl" />
        <span class="text-sm">{{ car.gear_shifter }}</span>
      </div>
    </div>
    <!-- footer  -->
    <template #footer>
      <div class="p-4 flex justify-between items-center">
        <div>
          <div class="flex gap-2 items-center" v-if="car.show_status">
            <span
              v-if="car.price_before_discount"
              class="line-through text-gray-600"
              >{{ car.price_before_discount }}</span
            >
            <span v-if="car.price" class="text-second-dark">{{
              car.price
            }}</span>
            <span
              v-if="car.price_after_vat && car.price !== car.price_after_vat"
              class="text-second-dark"
              >{{ car.price_after_vat }}</span
            >
            <SVGSaudiRiyal />
          </div>
          <div v-else class="capitalize">
            {{ car.price_field_status }}
          </div>
          <p v-if="car.show_status" class="text-second-dark">
            {{ $t("priceTax") }}
          </p>
        </div>
        <UIcon
          name="material-symbols:arrow-left-alt"
          class="text-3xl hover:rotate-45 duration-200 transition-transform"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { ICar } from "~/types/Car";

const props = defineProps<{
  car: ICar;
}>();
</script>

<style scoped></style>
