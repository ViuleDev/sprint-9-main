<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1 class="text-center my-4">My favourite movies</h1>
    <div class="row text-center">
      <MovieTable v-for="movie in store.favouriteMovies" :movie="movie" :route="`/movies/${movie.id}`" :imgSrc="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="col col-md-4 col-xl-3 col-xxl-2 my-3 movie py-2" />
    </div>
  </div>
</template>
