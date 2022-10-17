<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

const route = useRoute();
const id = route.params.id;

store.fetchSingleMovie(id);
</script>

<template>
  <div>
    <div v-if="store.movieDetail">
      <h1>MOVIE DETAIL PAGE</h1>
      <div class="movie-container">
        <img :src="`https://image.tmdb.org/t/p/original${store.movieDetail.backdrop_path}`" class="backdrop" alt="Backdrop" />
        <div class="movie-card">
          <div class="movie-title text-center">
            <h2>{{ store.movieDetail.title }}</h2>
          </div>
          <div class="movie-poster">
            <img :src="`https://image.tmdb.org/t/p/w300${store.movieDetail.poster_path}`" alt="Movie Poster" />
          </div>
          <div class="movie-overview">
            <p>{{ store.movieDetail.overview }}</p>
          </div>
          <div class="movie-details">
            <p v-if="store.movieDetail.status !== 'Released'">{{ store.movieDetail.status }}</p>
            <p>Release year: {{ store.movieDetail.release_date.slice(0, 4) }}</p>
            <p>Votes: {{ store.movieDetail.vote_count }}</p>
            <p>Average score: {{ store.movieDetail.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-container {
  overflow: hidden;
  position: relative;
}

.backdrop {
  opacity: 0.4;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.movie-card {
  position: relative;
}
</style>
