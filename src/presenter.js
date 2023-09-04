import AutoController from "./Auto";

const comandos = document.getElementById("comandos");
const form = document.querySelector("#form_ejecutar");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  const auto = new AutoController();
  event.preventDefault();
  div.innerHTML = "<p>" + auto.procesarComandos(comandos.value) + "</p>";
});