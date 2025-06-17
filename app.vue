<template>
  <div>
    <UApp :toaster="{ position: 'top-right', duration: 2000 }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
<script lang="ts" setup>
const { locale, locales } = useI18n();
const wishlist = useWishlistStore();
useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => (locale.value === "ar" ? "rtl" : "ltr")),
  },
});
onMounted(() => {
  wishlist.loadFromStorage();
});
</script>
