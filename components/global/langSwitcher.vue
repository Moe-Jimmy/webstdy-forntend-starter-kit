<template>
  <div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="text-lg"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

watch(
  () => locale.value,
  (val) => {
    if (val) {
      useHead({
        htmlAttrs: {
          lang: locale.value == "en" ? "en" : "ar",
          dir: locale.value == "en" ? "ltr" : "rtl",
        },
      });
    }
  }
);
</script>

<style scoped></style>
