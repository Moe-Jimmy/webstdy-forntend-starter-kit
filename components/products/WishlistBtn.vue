<template>
  <UIcon
    :name="
      isFavorite
        ? 'i-material-symbols:favorite'
        : 'i-material-symbols:favorite-outline'
    "
    class="text-3xl cursor-pointer"
    :class="isFavorite ? 'text-red-600' : 'text-black'"
    @click="toggleFavorite"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  carId: number;
}>();
const toast = useToast();
const { t } = useI18n();
const wishlist = useWishlistStore();
const isFavorite = computed(() => wishlist.wishlistIds.includes(props.carId));
function toggleFavorite() {
  wishlist.toggle(props.carId);
  toast.add({
    title: isFavorite.value ? t("addItem") : t("removeItem"),
    description: isFavorite.value
      ? t("addFavoriteMessage")
      : t("removeFavoriteMessage"),
    color: isFavorite.value ? "success" : "info",
    ui: {
      root: "bg-black",
      title: "text-white",
      description: "text-white",
    },
  });
}
</script>

<style scoped></style>
