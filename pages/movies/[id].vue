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
      <div class="movie-container pb-5 ps-5">
        <img :src="`https://image.tmdb.org/t/p/original${store.movieDetail.backdrop_path}`" class="backdrop" alt="Backdrop" />
        <div class="movie-card">
          <div class="movie-title text-center my-3">
            <h2>{{ store.movieDetail.title }}</h2>
          </div>
          <div class="movie-poster">
            <img :src="`https://image.tmdb.org/t/p/w300${store.movieDetail.poster_path}`" alt="Movie Poster" />
          </div>
          <div class="movie-details p-3">
            <p>{{ store.movieDetail.overview }}</p>
            <p v-if="store.movieDetail.status !== 'Released'">{{ store.movieDetail.status }}</p>
            <br />
            <p>Release Year: {{ store.movieDetail.release_date.slice(0, 4) }}</p>
            <p>Community Votes: {{ store.movieDetail.vote_count }}</p>
            <p>Average Score: {{ store.movieDetail.vote_average.toFixed(2) }}</p>
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
  height: 100%;
}

.movie-card {
  position: relative;
}

.movie-details {
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
  font-size: 1.1rem;
  font-weight: 600;
}

@media (max-width: 991px) {
  .backdrop {
    display: none;
  }

  .movie-poster {
    text-align: center;
  }
}
</style>
