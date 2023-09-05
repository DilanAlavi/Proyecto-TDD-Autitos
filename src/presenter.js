import ControlAuto from "./Auto";

const comandos = document.getElementById("comandos");
const form = document.querySelector("#form_ejecutar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const auto = new ControlAuto();
  event.preventDefault();
  const result = auto.Comando(comandos.value);
  const comandosValue = comandos.value;
  
  // Dividir la cadena en las partes correspondientes
  const partes = comandosValue.split('/');
  
  if (partes.length === 3) {
    const dimensionSuperficie = partes[0];
    const posicionInicial = partes[1];
    const comandosEjecutar = partes[2];
   
  console.log("Result:", result); // Check the result in the console
  div.innerHTML = `
  <p>Dimensión de la superficie: ${dimensionSuperficie}</p>
  <p>Posición inicial: ${posicionInicial}</p>
  <p>Comandos: ${comandosEjecutar}</p>
  <p>Posicion Final: ${result}</p>
`;}else {
  // Manejar el caso en el que los datos no tienen el formato esperado
  div.innerHTML = "<p>Error: El formato de entrada no es válido.</p>";
}

});
