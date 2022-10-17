<script setup>
const props = defineProps(["text", "navigate"]);
</script>

<template>
  <div>
    <NuxtLink :to="props.navigate" class="btn custom-btn mx-2">{{ props.text }}</NuxtLink>
  </div>
</template>
