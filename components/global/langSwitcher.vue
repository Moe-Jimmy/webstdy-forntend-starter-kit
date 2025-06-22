<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <div>
    <NuxtLink
      v-for="langs in availableLocales"
      :key="langs.code"
      :to="switchLocalePath(langs.code)"
      class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400"
    >
      {{ langs.name }}
    </NuxtLink>
  </div>
</template>
<style scoped></style>
