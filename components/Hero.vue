<script setup>
const props = defineProps(["heading"]);
</script>

<template>
  <div>
    <div class="hero">
      <h1 class="my-3">{{ props.heading }}</h1>
      <div class="text-center">
        <Button class="my-1" :text="'POPULAR MOVIES'" :navigate="'/movies'" />
        <Button :text="'SEARCH MOVIES'" :navigate="'/search'" />
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  background-size: cover;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: slideBg 10s ease infinite;
}

@keyframes slideBg {
  0%,
  100% {
    background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.4)), url("@/assets/img/bg1.jpg") center/cover;
  }

  25% {
    background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.4)), url("@/assets/img/bg2.jpg") center/cover;
  }
  50% {
    background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.4)), url("@/assets/img/bg3.jpg") center/cover;
  }
  75% {
    background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.4)), url("@/assets/img/bg4.jpg") center/cover;
  }
}
</style>
