import { defineStore } from "pinia";
import { createUser, signInUser, signOutUser, initUser } from "@/composables/useFirebase";
import axios from "axios";

// The Movies Database API Params
const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const TMDB_API_KEY = "07d513acf941d91696eb909321bf66e5";

export const useMainStore = defineStore("main", {
  state: () => ({
    // Main container for popular movies
    popularMovies: null,

    // Pagination used for the popular movies infinite scroll function
    popularMoviesPage: 1,

    // Container for the single movie details that we display in the movies/[id].vue page
    movieDetail: null,

    // V-model search query, used for the search function. It is updated by the getter "formatSearchQuery" and used in the fetch call.
    searchQuery: "",

    // Container for the movies we find after we call the searchMovie function
    foundMovies: null,

    // Pagination used for the found movies, we update this value when we hit the "load more movies" button
    foundMoviesPage: 1,
    toggleLoadDataButton: false,

    displaySignupModal: false,
    displayLoginModal: false,
  }),

  getters: {
    // This getter is used to format the search query according to the API documentation (each space is replaced by "%20")
    formatSearchQuery: (state) => {
      const formattedQuery = state.searchQuery.replace(/\s+/g, "%20").toLowerCase().trimEnd();
      return formattedQuery;
    },
  },

  actions: {
    // These 2 functions are used to toggle the Signup and Login modals.
    toggleSignupModal() {
      this.displaySignupModal = !this.displaySignupModal;
    },
    toggleLoginModal() {
      this.displayLoginModal = !this.displayLoginModal;
    },

    // The Movies Database API
    async getPopularMovies() {
      if (!this.popularMovies) {
        try {
          const data = await axios.get(`${POPULAR_URL}${TMDB_API_KEY}&language=en-US&page=1`);
          console.log(data.data.results);
          if (data.status === 200) {
            this.popularMovies = data.data.results;
          }
        } catch (err) {
          console.log(err);
        }
      }
    },

    // Infinite scroll API calls
    async fetchMoreMovies() {
      this.popularMoviesPage++;
      try {
        const data = await axios.get(`${POPULAR_URL}${TMDB_API_KEY}&language=en-US&page=${this.popularMoviesPage}`);
        console.log(data.data.results);
        if (data.status === 200 && this.popularMoviesPage <= data.data.total_pages) {
          this.popularMovies = this.popularMovies.concat(data.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    },

    // Used to fetch a single movie's details using the ID passed from the route param
    async fetchSingleMovie(id) {
      try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`);
        console.log(data.data);
        if (data.status === 200) {
          this.movieDetail = data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },

    // This function gets called when we hit the Search button in the search.vue
    async searchMovie() {
      this.foundMoviesPage = 1;
      try {
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${this.formatSearchQuery}&page=1&include_adult=false`);
        console.log(data.data);

        if (data.status === 200) {
          this.foundMovies = data.data.results;
          this.toggleLoadDataButton = true;
        }

        if (this.foundMovies.length === data.data.total_results) {
          this.toggleLoadDataButton = false;
        }
      } catch (err) {
        console.log(err);
      }
    },

    // This function gets called when we hit the load more data button in the search.vue
    async moreFoundMovies() {
      this.foundMoviesPage++;
      try {
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${this.formatSearchQuery}&page=${this.foundMoviesPage}&include_adult=false`);
        console.log(data.data.results);
        if (data.status === 200 && this.foundMoviesPage <= data.data.total_pages) {
          this.foundMovies = this.foundMovies.concat(data.data.results);
        }

        if (this.foundMovies.length >= data.data.total_results) {
          this.toggleLoadDataButton = false;
        }
      } catch (err) {
        console.log(err);
      }
    },

    async signIn() {
      let email = "millertrey@hotmail.com";
      let password = "12313241";
      const credentials = await createUser(email, password);
      console.log("credentials", credentials);
    },

    async signOut() {
      const result = await signOutUser();
      console.log("result: ", result);
    },
  },
});
