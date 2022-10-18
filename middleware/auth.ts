import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

export default defineNuxtRouteMiddleware((to) => {
  if (!store.currentUser && to.path === "/movies") {
    store.toggleLoginModal();
    return navigateTo("/");
  }
});
