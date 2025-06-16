<template>
  <nav
    class="sticky top-0 flex z-[99] h-[88px] container max-w-full items-center justify-between shadow-md transition-all duration-300 bg-primary"
  >
    <div class="brand">
      <NuxtLink to="/" class="text-[2rem] text-secondary1">{{
        $t("brand")
      }}</NuxtLink>
    </div>
    <div class="hidden lg:block">
      <ul class="flex gap-4">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink :to="link.path" class="text-xl">{{
            $t(link.name)
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="icons flex gap-[6px] sm:gap-4 items-center">
      <div
        class="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer"
      >
        <LangSwitcher />
      </div>
      <div
        class="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer"
      >
        <UIcon name="i-lucide:heart" class="text-xl" />
      </div>
      <div
        @click="toggleSideMenu"
        class="lg:hidden flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer"
      >
        <UIcon :name="sideIcon" class="text-xl" />
      </div>
    </div>

    <!-- ------------------side Nav---------------------  -->
    <div
      class="block lg:hidden top-0 side-nav end-0 absolute max-h-screen h-screen shadow-md bg-primary overflow-hidden transition-all duration-300 ease-in-out"
      :class="isSideOpened ? 'w-[300px]' : 'w-0'"
    >
      <div
        @click="closeSideMenu"
        class="flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer ms-auto mx-4 my-6"
      >
        <UIcon name="i-lucide:x" class="text-xl" />
      </div>
      <ul class="flex flex-col gap-3 ms-4">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink @click="closeSideMenu" :to="link.path" class="text-xl">{{
            $t(link.name)
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "contact-us",
    path: "/contact-us",
  },
];
// Side Nav
const isSideOpened = ref<boolean>(false);
const { locale, locales } = useI18n();

const currentLocale = computed(() =>
  locales.value.find((l) => l.code === locale.value)
);

const sideIcon = computed(() =>
  currentLocale.value?.dir === "rtl"
    ? "lucide:align-left"
    : "lucide:align-right"
);

function toggleSideMenu() {
  isSideOpened.value = true;
}
function closeSideMenu() {
  isSideOpened.value = false;
}
</script>
<style scoped></style>
