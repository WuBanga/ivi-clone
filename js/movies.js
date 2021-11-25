import { requestMovies } from "./api.js";
import {
  createMovieCard,
  createEmptyMovieCard,
} from "./components/movieCard.js";

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
