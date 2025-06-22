<script setup lang="ts">
const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "order",
    path: "/order",
  },
  {
    name: "products",
    path: "/cars",
  },
  {
    name: "contact-us",
    path: "/",
  },
];
// Side Nav
const isSideOpened = ref<boolean>(false);
const { locale, locales } = useI18n();
const currentLocale = computed(() =>
  locales.value.find((l) => l.code === locale.value),
);
const sideIcon = computed(() =>
  currentLocale.value?.dir === "rtl"
    ? "lucide:align-left"
    : "lucide:align-right",
);

function toggleSideMenu() {
  isSideOpened.value = true;
}
function closeSideMenu() {
  isSideOpened.value = false;
}
</script>
<template>
  <nav
    class="bg-primary sticky top-0 z-[99] container flex h-[88px] max-w-full items-center justify-between shadow-md transition-all duration-300"
  >
    <div class="brand">
      <NuxtLinkLocale to="/" class="text-secondary1 text-[2rem]">{{
        $t("brand")
      }}</NuxtLinkLocale>
    </div>
    <div class="hidden lg:block">
      <ul class="flex gap-4">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLinkLocale :to="link.path" class="text-xl">{{
            $t(link.name)
          }}</NuxtLinkLocale>
        </li>
      </ul>
    </div>
    <div class="icons flex items-center gap-[6px] sm:gap-4">
      <LangSwitcher />
      <NuxtLinkLocale
        :to="'/wishlist'"
        class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400"
      >
        <UIcon name="i-lucide:heart" class="text-xl" />
      </NuxtLinkLocale>
      <div
        class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400 lg:hidden"
        @click="toggleSideMenu"
      >
        <UIcon :name="sideIcon" class="text-xl" />
      </div>
    </div>

    <!-- ------------------side Nav---------------------  -->
    <div
      class="side-nav bg-primary absolute end-0 top-0 block h-screen max-h-screen overflow-hidden shadow-md transition-all duration-300 ease-in-out lg:hidden"
      :class="isSideOpened ? 'w-[300px]' : 'w-0'"
    >
      <div
        class="mx-4 my-6 ms-auto flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400"
        @click="closeSideMenu"
      >
        <UIcon name="i-lucide:x" class="text-xl" />
      </div>
      <ul class="ms-4 flex flex-col gap-3">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLinkLocale
            :to="link.path"
            class="text-xl"
            @click="closeSideMenu"
            >{{ $t(link.name) }}</NuxtLinkLocale
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped></style>
