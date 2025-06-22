// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "nuxt-aos",
    "@nuxt/eslint",
  ],
  ui: {
    colorMode: false,
  },
  css: ["./assets/css/main.css"],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      {
        language: "en",
        code: "en",
        name: "EN",
        dir: "ltr",
        file: "en.json",
      },
      {
        language: "ar",
        code: "ar",
        name: "AR",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
    langDir: "locales",
    lazy: true,
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },
  aos: {
    offset: 120,
    delay: 200,
    duration: 400,
    easing: "ease",
    once: false,
  },
  runtimeConfig: {
    public: {
      apiBase: "https://admin.nasiralmutayri.com/api",
    },
  },
  imports: {
    dirs: ["composables", "stores"],
  },
});
