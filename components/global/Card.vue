<script setup lang="ts">
import type { ICar } from "~/types/Car";

const props = defineProps<{
  car: ICar;
}>();
</script>
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
          class="block h-[200px] w-full object-contain"
          loading="lazy"
        />
      </figure>
    </template>
    <div class="flex items-center justify-between">
      <WishlistBtn :car-id="car.id" />
      <div
        v-if="car.model"
        class="bg-primary text-second-dark rounded-lg px-3 py-2 text-sm"
      >
        {{ car.model }}
      </div>
    </div>
    <!-- title  -->
    <h2 class="my-3 line-clamp-2 h-[60px] text-[20px] font-medium">
      {{ car.name }}
    </h2>
    <!-- description  -->
    <div class="grid grid-cols-2 gap-4">
      <div v-if="car.year" class="flex items-center gap-3">
        <UIcon
          name="i-material-symbols:calendar-month-outline"
          class="text-3xl"
        />
        <span class="text-sm">{{ car.year }}</span>
      </div>
      <div v-if="car.brand" class="flex items-center gap-3">
        <UIcon name="i-mdi:car-side" class="text-3xl" />
        <span class="text-sm">{{ car.brand }}</span>
      </div>
      <div v-if="car.fuel_type" class="flex items-center gap-3">
        <UIcon name="i-tabler:engine" class="text-3xl" />
        <span class="text-sm">{{ car.fuel_type }}</span>
      </div>
      <div v-if="car.gear_shifter" class="flex items-center gap-3">
        <UIcon name="i-hugeicons:gears" class="text-3xl" />
        <span class="text-sm">{{ car.gear_shifter }}</span>
      </div>
    </div>
    <!-- footer  -->
    <template #footer>
      <div class="flex items-center justify-between p-4">
        <div>
          <div v-if="car.show_status" class="flex items-center gap-2">
            <span
              v-if="car.price_before_discount"
              class="text-gray-600 line-through"
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
          class="text-3xl transition-transform duration-200 hover:rotate-45"
        />
      </div>
    </template>
  </UCard>
</template>
<style scoped></style>
