<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
</script>

<template>
  <div>
    <Hero :heading="'Explore our incredible movies database!'" />
  </div>
</template>
