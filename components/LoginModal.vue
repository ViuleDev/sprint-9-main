<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
const loginEmail = ref("");
const loginPassword = ref("");

const toggleModals = () => {
  store.displaySignupModal = true;
  store.signUpMsg = "";
  store.displayLoginModal = false;
};

const callLogin = () => {
  // Sending data to the store login function
  store.logIn({
    email: loginEmail.value,
    password: loginPassword.value,
  });

  loginEmail.value = "";
  loginPassword.value = "";
};
</script>

<template>
  <div @click.self="store.toggleLoginModal()" class="modal-wrapper">
    <div class="custom-modal text-center">
      <form class="custom-form" @submit.prevent="callLogin">
        <h3>LOG IN</h3>
        <input type="email" placeholder="Your email address" v-model="loginEmail" />
        <input type="password" placeholder="Password" v-model="loginPassword" />
        <button class="btn custom-btn">Log In</button>
        <p v-if="store.loginMsg">{{ store.loginMsg }}</p>
        <a href="#" @click="toggleModals">Not registered yet? Sign up!</a>
      </form>
    </div>
  </div>
</template>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-modal {
  width: 500px;
  background: #1c2a35;
  padding: 2rem;
  position: relative;
  border-radius: 5px;
}
</style>
