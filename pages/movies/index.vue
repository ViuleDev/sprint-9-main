<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
store.getPopularMovies();
</script>

<template>
  <div class="top-movies">
    <h1 class="my-4">Browse Movies</h1>
    <div class="row text-center">
      <MovieTable v-for="movie in store.popularMovies" :movie="movie" :route="`/movies/${movie.id}`" :imgSrc="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="col col-md-4 col-xl-3 col-xxl-2 my-3 movie py-2" />
    </div>
    <div class="text-center">
      <button class="btn custom-btn my-4" @click="store.fetchMoreMovies()">LOAD MORE MOVIES</button>
    </div>
  </div>
</template>
