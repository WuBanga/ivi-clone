import { requestPopularMovies } from "./api.js";

const posterPath = "https://image.tmdb.org/t/p/original";

export async function fillPopularMovies() {
  const popularMoviesSection = document.querySelector("#popular-movies");

  const data = await requestPopularMovies();

  let movieCardArray = [];

  for (const movie of data.results) {
    const { poster_path, title } = movie;
    const imgSrc = `${posterPath}${poster_path}`;
    const imgAlt = title;
    const movieName = title;
    movieCardArray.push(createMovieCard(imgSrc, imgAlt, movieName));
  }

  movieCardArray.push(createEmptyMovieCard());
  movieCardArray.forEach((movieCard) => {
    popularMoviesSection.appendChild(movieCard);
  });
}

function createMovieCard(imgSrc, imgAlt, movieName) {
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

  return movieCard;
}

function createEmptyMovieCard() {
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
  movieCardPoster.appendChild(movieCardText);

  movieCardText.textContent = "Посмотреть все";
  return movieCard;
}
