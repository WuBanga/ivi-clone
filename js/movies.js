import { requestPopularMovies } from "./api.js";

export function fillPopularMovies() {
  const popularMoviesSection = document.querySelector("section div.movies");

  const posterPath = "https://image.tmdb.org/t/p/original";

  requestPopularMovies()
    .then((data) => {
      for (const movie of data.results) {
        const { poster_path, title } = movie;
        const imgSrc = `${posterPath}${poster_path}`;
        const imgAlt = title;
        const movieName = title;
        createMovieCard(popularMoviesSection, imgSrc, imgAlt, movieName);
      }

      createEmptyMovieCard(popularMoviesSection);
    })
    .catch((err) => {
      console.error(err);
    });
}

function createMovieCard(section, imgSrc, imgAlt, movieName) {
  const movieCard = document.createElement("a");
  const movieCardPoster = document.createElement("img");
  const movieCardText = document.createElement("p");

  movieCard.classList.add("movie-card");
  movieCardPoster.classList.add("movie-card__poster");
  movieCardText.classList.add("movie-card__text");

  movieCard.appendChild(movieCardPoster);
  movieCard.appendChild(movieCardText);

  movieCardPoster.src = imgSrc;
  movieCardPoster.alt = imgAlt;

  movieCardText.textContent = movieName;

  section.appendChild(movieCard);
}

function createEmptyMovieCard(section) {
  const movieCard = document.createElement("a");
  const movieCardPoster = document.createElement("div");
  const movieCardText = document.createElement("p");

  movieCard.classList.add("movie-card");
  movieCardPoster.classList.add(
    "movie-card__poster",
    "movie-card__poster--empty"
  );
  movieCardText.classList.add("movie-card__text");

  movieCard.appendChild(movieCardPoster);
  movieCard.appendChild(movieCardText);

  movieCardText.textContent = "Посмотреть все";
  section.appendChild(movieCard);
}
