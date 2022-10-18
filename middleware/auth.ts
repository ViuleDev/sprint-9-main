import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

export default defineNuxtRouteMiddleware((to) => {
  if (!store.loggedIn && to.path === "/movies") {
    store.toggleLoginModal();
    return navigateTo("/");
  } else if (!store.loggedIn && to.path === "/search") {
    store.toggleLoginModal();
    return navigateTo("/");
  } else if (!store.loggedIn && to.path === "/favourites") {
    store.toggleLoginModal();
    return navigateTo("/");
  }
});
