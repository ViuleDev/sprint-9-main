<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

const toggleModals = () => {
  store.displaySignupModal = false;
  store.displayLoginModal = true;
  store.loginMsg = "";
};
</script>

<template>
  <div @click.self="store.toggleSignupModal()" class="modal-wrapper">
    <div class="custom-modal text-center">
      <form class="custom-form" @submit.prevent="store.signUp">
        <h3>SIGN UP</h3>
        <input type="email" placeholder="Your email address" v-model="store.email" />
        <input type="password" placeholder="Password" v-model="store.password" />
        <button class="btn custom-btn">Sign Up</button>
        <p v-if="store.signUpMsg">{{ store.signUpMsg }}</p>
        <a href="#" @click="toggleModals">Already registered? Login!</a>
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
