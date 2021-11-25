import { fillMovies } from "./movies.js";

window.onload = () => {
  fillMovies("popular-movies", "popular");
  fillMovies("top-rated-movies", "top_rated");
  fillMovies("upcoming-movies", "upcoming");
};
