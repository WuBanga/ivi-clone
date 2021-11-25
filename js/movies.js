import { requestMovies } from "./api.js";
import { ElementBuilder } from "./components/element.js";

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
  const movieCardText = new ElementBuilder("p")
    .setClasses(["movie-card__text"])
    .setText(movieName)
    .build();

  const movieCardPoster = new ElementBuilder("img")
    .setClasses(["movie-card__poster"])
    .setAttributes({
      src: imgSrc,
      alt: imgAlt,
    })
    .build();

  const movieCard = new ElementBuilder("a")
    .setClasses(["movie-card"])
    .setChildren([movieCardPoster, movieCardText])
    .build();

  return movieCard;
}

function createEmptyMovieCard() {
  const movieCardText = new ElementBuilder("p")
    .setClasses(["movie-card__text"])
    .setText("Посмотреть все")
    .build();

  const movieCardPoster = new ElementBuilder("div")
    .setClasses(["movie-card__poster", "movie-card__poster--empty"])
    .setChildren([movieCardText])
    .build();

  const movieCard = new ElementBuilder("a")
    .setClasses(["movie-card"])
    .setChildren([movieCardPoster, movieCardText])
    .build();

  return movieCard;
}
