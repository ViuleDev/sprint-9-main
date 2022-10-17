<script setup>
const props = defineProps(["movie", "route", "imgSrc"]);
</script>

<template>
  <div>
    <NuxtLink :to="route">
      <div class="movie-table-card">
        <img v-if="imgSrc.slice(-4) !== 'null'" :src="imgSrc" alt="Movie Poster" />
        <img v-else src="@/assets/img/NoPoster.png" alt="No poster was found." />
        <h3 class="movie-title mt-2">{{ movie.title }}</h3>
      </div>
    </NuxtLink>
  </div>
</template>

<style>
.movie-title {
  color: #00c58e;
  font-size: 1.2rem;
  font-weight: 400;
}
.movie-title:hover {
  color: #f1f1f1;
}

.movie-table-card img {
  border-radius: 10px;
}

.movie a {
  text-decoration: none;
}
</style>
