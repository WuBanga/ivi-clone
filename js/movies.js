import { requestMovies } from "./api.js";

const posterPath = "https://image.tmdb.org/t/p/original";

export async function fillMovies(sectionId, movieType) {
  const moviesSection = document.querySelector(`#${sectionId}`);

  const data = await requestMovies(movieType);

  let movieCards = [];

  for (const movie of data.results) {
    const { poster_path, title } = movie;
    const imgSrc = `${posterPath}${poster_path}`;
    const imgAlt = title;
    const movieName = title;
    movieCards.push(createMovieCard(imgSrc, imgAlt, movieName));
  }

  movieCards.push(createEmptyMovieCard());
  movieCards.forEach((movieCard) => {
    moviesSection.appendChild(movieCard);
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
