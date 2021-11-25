import { ElementBuilder } from "./element.js";

export function createPersonCard(imgSrc, imgAlt, personName, personSurname) {
  const personCardSurnameText = new ElementBuilder("p")
    .setClasses(["person-card__person-text"])
    .setText(personSurname)
    .build();

  const personCardNameText = new ElementBuilder("p")
    .setClasses(["person-card__person-text"])
    .setText(personName)
    .build();

  let personCardPosterBuilder;

  if (imgSrc) {
    personCardPosterBuilder = new ElementBuilder("img")
      .setClasses(["person-card__photo"])
      .setAttributes({
        src: imgSrc,
        alt: imgAlt,
      });
  } else {
    personCardPosterBuilder = new ElementBuilder("div").setClasses([
      "person-card__photo",
    ]);
  }

  const personCardPoster = personCardPosterBuilder.build();

  const personCard = new ElementBuilder("a")
    .setClasses(["person-card"])
    .setChildren([personCardPoster, personCardNameText, personCardSurnameText])
    .build();

  return personCard;
}
