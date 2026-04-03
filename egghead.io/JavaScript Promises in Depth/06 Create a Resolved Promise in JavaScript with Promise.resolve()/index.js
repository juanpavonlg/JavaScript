// #region Setup
const API_URL = "https://star-wars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join("\n");
}
// #endregion

Promise.resolve($.getJSON(API_URL + "films"))
  .then((films) => {
    output.innerText = getFilmTitles(films);
  })
  .catch((error) => {
    console.warn(error);
    output.innerText = ":(";
  })
  .finally(() => {
    spinner.remove();
  });
