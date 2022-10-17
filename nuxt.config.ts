// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    title: "Vince - Sprint 9",

    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },

      {
        src: "https://kit.fontawesome.com/1f2bd6a4f6.js",
      },
    ],
  },

  css: ["@/assets/css/bootstrap.min.css", "@/assets/css/custom.css"],

  modules: ["@pinia/nuxt"],

  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
});
