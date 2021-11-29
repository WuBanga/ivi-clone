import { fillMovies } from "./movies.js";
import { fillPersons } from "./persons.js";
import { popOverFilterMenu } from "./filters.js";

window.onload = () => {
  fillMovies("popular-movies", "popular");
  fillMovies("top-rated-movies", "top_rated");
  fillMovies("upcoming-movies", "upcoming");
  fillPersons();

  const filterBtns = document.querySelectorAll(".filter-bar__filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      popOverFilterMenu(event);
    });
  });
};
