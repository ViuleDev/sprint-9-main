<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
</script>

<template>
  <div @click.self="store.toggleLoginModal()" class="modal-wrapper">
    <div class="custom-modal text-center">I AM THE LOGIN MODAL BRO</div>
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
