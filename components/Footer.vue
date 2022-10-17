<template>
  <div>
    <footer class="text-center">
      <div>Follow MoviesMovies:</div>
      <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>

      <div class="links">
        <a href="#">About MovieMovies</a> | <a href="#">Privacy Policy</a> | <a href="#">FAQ</a> |
        <a href="#">Contact Us</a>
      </div>

      <div class="creds">
        <p>Powered By</p>
        <img src="@/assets/img/moviedb.svg" alt="" />
      </div>
    </footer>
  </div>
</template>

<style>
footer {
  padding: 1rem;
  background: #181c25;
}

footer div {
  margin: 1rem 0;
}

.icons i {
  margin: 0 10px;
  font-size: 1.5rem;
  color: #00c58e;
  cursor: pointer;
}

.icons i:hover {
  color: #f1f1f1;
}

.copyright {
  opacity: 0.5;
}

.copyright sup {
  color: #1267d5;
}

.links a {
  margin: 0 10px;
  color: #00c58e;
}

.links a:hover {
  color: #f1f1f1;
}

.creds img {
  width: 300px;
}
</style>
