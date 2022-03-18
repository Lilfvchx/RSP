let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
const botones = document.querySelectorAll("button");
const resultado=document.querySelector(".resultado")
const h1=document.createElement("h1")
resultado.appendChild(h1)

//Creo generador aleatorio de seleccion en un array para competir contra el user
function computerPlay() {
  const items = ["ROCK", "PAPER", "SCISSORS"];
  return items[Math.floor(Math.random() * items.length)];
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
    h1.textContent="tie";
    console.log("tie")
  }
  if (
    (playerEleccion === "ROCK" && computerEleccion === "SCISSORS") ||
    (playerEleccion === "SCISSORS" && computerEleccion === "PAPER") ||
    (playerEleccion === "PAPER" && computerEleccion === "ROCK")
  ) {
    playerScore++;
    h1.textContent="player";
    console.log("player")
  }
  if (
    (computerEleccion === "ROCK" && playerEleccion === "SCISSORS") ||
    (computerEleccion === "SCISSORS" && playerEleccion === "PAPER") ||
    (computerEleccion === "PAPER" && playerEleccion === "ROCK")
  ) {
    computerScore++;
    h1.textContent="computer";
    console.log("computer")
  }
}
function game() {
  for (let index = 0; index<5; index++) {
    gameUser()
  }
  if (scorehuman>scorecomputer) {
    h1.textContent="El humano vencio"
  }
  if (scorecomputer>scorehuman){
    h1.textContent="la computadora vencio"
  }
}
game();
