<script setup lang="ts">
const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/",
  },
  {
    name: "products",
    path: "/",
  },
  {
    name: "contact-us",
    path: "/",
  },
];
// default Nav
const isDefaultOpened = ref<boolean>(false);
const menuHeight = ref<number>(0);
const mobileDefaultNav = ref<HTMLElement | null>(null);
function toggleDefaultMenu() {
  isDefaultOpened.value = !isDefaultOpened.value;
  if (isDefaultOpened.value) {
    menuHeight.value = mobileDefaultNav.value?.scrollHeight ?? 0;
  } else {
    menuHeight.value = 0;
  }
}
function closeDefaultMenu() {
  isDefaultOpened.value = false;
  menuHeight.value = 0;
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
      <div
        class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400"
      >
        <LangSwitcher />
      </div>
      <div
        class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400"
      >
        <UIcon name="i-lucide:heart" class="text-xl" />
      </div>
      <div
        class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-400 lg:hidden"
        @click="toggleDefaultMenu"
      >
        <UIcon
          :name="isDefaultOpened ? 'i-lucide:x' : 'i-lucide:align-justify'"
          class="text-xl"
        />
      </div>
    </div>
    <!-- ---------------default Nav-------------------  -->
    <div
      ref="mobileDefaultNav"
      class="top-nav bg-primary absolute top-full left-0 block w-full overflow-hidden shadow-md transition-all duration-300 ease-in-out lg:hidden"
      :style="{ 'max-height': isDefaultOpened ? menuHeight + 'px' : '0px' }"
    >
      <ul class="flex flex-col gap-3 py-4 text-center">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLinkLocale
            :to="link.path"
            class="text-xl"
            @click="closeDefaultMenu"
            >{{ $t(link.name) }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped></style>
