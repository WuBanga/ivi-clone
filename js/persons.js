import { requestPersons } from "./api.js";
import { createPersonCard } from "./components/personCard.js";

const posterPath = "https://image.tmdb.org/t/p/original";

export async function fillPersons() {
  const personsSection = document.querySelector("#persons");

  const data = await requestPersons();

  let personsCards = [];

  for (const person of data.results) {
    const { profile_path, name } = person;
    const imgSrc = profile_path ? `${posterPath}${profile_path}` : null;
    const imgAlt = name;
    const [personName, ...personSurname] = name.split(" ");
    personsCards.push(
      createPersonCard(imgSrc, imgAlt, personName, personSurname)
    );
    personsCards.forEach((personCard) => {
      personsSection.appendChild(personCard);
    });
  }
}
