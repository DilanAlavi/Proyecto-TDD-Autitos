import ControlAuto from "./Auto";

const comandos = document.getElementById("comandos");
const form = document.querySelector("#form_ejecutar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const auto = new ControlAuto();
  event.preventDefault();
  const result = auto.Comando(comandos.value);
  console.log("Result:", result); // Check the result in the console
  div.innerHTML = "<p>" + result + "</p>";
});
