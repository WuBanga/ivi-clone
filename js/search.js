import { fillMoviesBySearch } from "./movies.js";

window.onload = () => {
  const userQuery = new URLSearchParams(window.location.search).get("search");
  console.log(userQuery);
  const searchText = document.getElementById("search-query");
  searchText.textContent = userQuery;
  fillMoviesBySearch("movies-by-search", userQuery);
};
