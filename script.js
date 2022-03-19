let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
const botones = document.querySelectorAll("button");
const resultado = document.querySelector(".resultado");
const h1 = document.createElement("h1");
resultado.appendChild(h1);
const eleccioncomputadora=document.createElement("p")
resultado.appendChild(eleccioncomputadora)
const bodyvar=document.body
console.log(bodyvar)

//Creo generador aleatorio de seleccion en un array para competir contra el user
function computerPlay() {
  const items = ["ROCK", "PAPER", "SCISSORS"];
  let mathcomputer= items[Math.floor(Math.random() * items.length)];
  eleccioncomputadora.textContent=`${mathcomputer} puto el que lee`
  return mathcomputer
}
//genero funcion para poder obtener la eleccion del user por el boton
function gameUser() {
  botones.forEach((accion) => {
    accion.addEventListener("click", (e) => {
      logicalComparasion(computerPlay(), e.target.id);
      e.stopPropagation;
    });
  });
}
// genero logica para el luego y declaro ganadores por ronda
function logicalComparasion(computerEleccion, playerEleccion) {
  if (playerEleccion === computerEleccion) {
    playerScore++;
    computerScore++;
    h1.textContent = "tie";
    
  }
  if (
    (playerEleccion === "ROCK" && computerEleccion === "SCISSORS") ||
    (playerEleccion === "SCISSORS" && computerEleccion === "PAPER") ||
    (playerEleccion === "PAPER" && computerEleccion === "ROCK")
  ) {
    playerScore++;
    h1.textContent = "player";
  }
  if (
    (computerEleccion === "ROCK" && playerEleccion === "SCISSORS") ||
    (computerEleccion === "SCISSORS" && playerEleccion === "PAPER") ||
    (computerEleccion === "PAPER" && playerEleccion === "ROCK")
  ) {
    computerScore++;
    h1.textContent = "computer";
    console.log("computer");
  }
}
function game() {
  for (let index = 0; index < 5; index++) {
    gameUser();
  }
  if (playerScore > computerScore) {
    h1.textContent = "El humano vencio";
  }
  if (computerScore > playerScore) {
    h1.textContent = "la computadora vencio";
  }
}
game();
