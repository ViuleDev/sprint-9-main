<script setup>
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();
</script>

<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md nav-bg navbar-dark">
        <div class="container">
          <NuxtLink to="/" class="navbar-brand">
            <p class="logo nav-link">MoviesMovies</p>
          </NuxtLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0 nav-ul">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link" aria-current="page">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/movies" class="nav-link">Movies</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/search" class="nav-link">Search Movies</NuxtLink>
              </li>
              <li class="nav-item">
                <button class="btn custom-outline-btn mb-2 me-2" @click="store.toggleSignupModal()" v-if="!store.loggedIn">Sign Up</button>
              </li>
              <li class="nav-item">
                <button class="btn custom-outline-btn" @click="store.toggleLoginModal()" v-if="!store.loggedIn">Log In</button>
                <button class="btn custom-outline-btn" @click="store.logOut()" v-else>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div v-if="store.displaySignupModal">
      <SignupModal />
    </div>
    <div v-if="store.displayLoginModal">
      <LoginModal />
    </div>
  </div>
</template>

<style>
.nav-bg {
  background: #181c25;
}

.navbar-brand img {
  width: 70px;
}

.nav-ul {
  margin-left: auto;
  font-size: 1.1rem;
}

.nav-ul li a {
  color: #00c58e;
}

.nav-ul li a:focus,
.nav-ul li a:hover {
  color: #f1f1f1;
}

.logo {
  color: #00c58e;
  font-weight: 700;
  font-size: 1.7rem;
  margin: 0;
}
</style>
