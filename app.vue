<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const { locale, locales } = useI18n();

onMounted(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value == "en" ? "en" : "ar",
      dir: locale.value == "en" ? "ltr" : "rtl",
    },
  });
});
</script>
