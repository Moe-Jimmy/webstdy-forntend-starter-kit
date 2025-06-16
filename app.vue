<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const { locale, locales } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => (locale.value === "ar" ? "rtl" : "ltr")),
  },
});
</script>
