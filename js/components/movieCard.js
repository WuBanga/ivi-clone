import { ElementBuilder } from "./element.js";

export function createMovieCard(imgSrc, imgAlt, movieName) {
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

export function createEmptyMovieCard() {
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
