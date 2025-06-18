<template>
  <div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer"
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
</script>

<style scoped></style>
