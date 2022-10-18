<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
</script>

<template>
  <div>
    <div class="search-hero">
      <h4 class="text-center">Find what you watching tonight...</h4>
      <form class="form text-center my-4" @submit.prevent="store.searchMovie">
        <input type="text" v-model="store.searchQuery" />
        <button class="btn custom-btn">Search</button>
      </form>
    </div>
    <div class="row text-center">
      <MovieTable v-if="store.foundMovies" v-for="movie in store.foundMovies" :movie="movie" :route="`/movies/${movie.id}`" :imgSrc="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="col col-md-4 col-xl-3 col-xxl-2 my-3 movie" :key="movie.id" />
    </div>
    <div class="text-center" v-if="store.toggleLoadDataButton">
      <button class="btn custom-btn my-4" @click="store.moreFoundMovies()">LOAD MORE MOVIES</button>
    </div>
  </div>
</template>

<style>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form input[type="text"] {
  border: 1px solid #00c58e;
  background: transparent;
  backdrop-filter: blur(10px);
  color: #00c58e;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
}

.search-hero {
  height: 60vh;
  background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.4)), url("@/assets/img/bg5.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
