<template>
  <nav
    class="sticky top-0 flex z-[99] h-[88px] container max-w-full items-center justify-between shadow-md transition-all duration-300 bg-primary"
  >
    <div class="brand">
      <NuxtLink :to="localePath('/')" class="text-[2rem] text-secondary1">{{
        $t("brand")
      }}</NuxtLink>
    </div>
    <div class="hidden lg:block">
      <ul class="flex gap-4">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink :to="localePath(link.path)" class="text-xl">{{
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
        @click="toggleDefaultMenu"
        class="lg:hidden flex justify-center items-center rounded-full w-[40px] h-[40px] bg-gray-200 hover:bg-gray-400 duration-200 transition-colors cursor-pointer"
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
      class="block lg:hidden top-nav left-0 absolute top-full w-full bg-primary overflow-hidden shadow-md transition-all duration-300 ease-in-out"
      :style="{ 'max-height': isDefaultOpened ? menuHeight + 'px' : '0px' }"
    >
      <ul class="flex flex-col text-center py-4 gap-3">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            @click="closeDefaultMenu"
            :to="localePath(link.path)"
            class="text-xl"
            >{{ $t(link.name) }}</NuxtLink
          >
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
const localePath = useLocalePath();
// default Nav
const isDefaultOpened = ref<boolean>(false);
const menuHeight = ref<number>(0);
const mobileDefaultNav = ref<HTMLElement | null>(null);
function toggleDefaultMenu() {
  isDefaultOpened.value = !isDefaultOpened.value;
  if (isDefaultOpened) {
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
<style scoped></style>
