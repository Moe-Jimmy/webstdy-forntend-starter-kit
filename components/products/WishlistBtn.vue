<template>
  <UIcon
    :name="
      isFavorite
        ? 'i-material-symbols:favorite'
        : 'i-material-symbols:favorite-outline'
    "
    class="text-xl cursor-pointer"
    :class="isFavorite ? 'text-red-600' : 'text-black'"
    @click="toggleFavorite"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  carId: number;
}>();

const wishlist = useWishlistStore();
const isFavorite = computed(() => wishlist.wishlistIds.includes(props.carId));
function toggleFavorite() {
  wishlist.toggle(props.carId);
}
</script>

<style scoped></style>
