const apiKey = "1100b73be5eaeb1e081c842af48022f9";

export async function requestSearch(query) {
  const path = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ru-RU&query=${query}`;

  const response = await fetch(path);

  return response;
}

export async function requestPopularMovies() {
  const path = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU`;

  const response = await fetch(path);
  const data = await response.json();

  return data;
}
