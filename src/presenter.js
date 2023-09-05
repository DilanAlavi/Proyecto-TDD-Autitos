import ControlAuto from "./Auto";

const comandos = document.getElementById("comandos");
const form = document.querySelector("#form_ejecutar");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  const auto = new ControlAuto();
  event.preventDefault();
  div.innerHTML = "<p>" + auto.procesarComandos(comandos.value) + "</p>";
});