<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
</script>

<template>
  <div>
    <h1 class="my-4">SEARCH PAGE</h1>
    <form @submit.prevent="store.searchMovie">
      <p>Search input:</p>
      <input type="text" v-model="store.searchQuery" />
      <p>{{ store.formatSearchQuery }}</p>
      <button>Search</button>
    </form>
    <div class="row text-center">
      <MovieTable v-if="store.foundMovies" v-for="movie in store.foundMovies" :movie="movie" :route="`/movies/${movie.id}`" :imgSrc="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="col col-md-4 col-xl-3 col-xxl-2 my-3 movie" :key="movie.id" />
    </div>
    <div class="text-center" v-if="store.toggleLoadDataButton">
      <button class="btn custom-btn my-4" @click="store.moreFoundMovies()">LOAD MORE MOVIES</button>
    </div>
  </div>
</template>
