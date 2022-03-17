//Creo generador aleatorio de seleccion en un array para competir contra el user
function computerPlay() {
  const items = ["ROCK", "PAPER", "SCISSORS"];
  return items[Math.floor(Math.random() * items.length)];
}
let scorehuman = 0;
let scorecomputer = 0;
let roundWinner = "";
//genero funcion para poder obtener la eleccion del user por el boton
function playerSelection() {
  const botones = document.querySelectorAll("button");
  botones.forEach((accion) => {
    accion.addEventListener("click", (e) => {
      //console.log(eleccionuser);
      e.stopPropagation;
      return String(e.target.id).toUpperCase;
    });
  });
  
}
// genero logica para el luego y declaro ganadores por ronda

let game = (computerEleccion, playerEleccion) => {
  if (playerEleccion === computerEleccion) {
    roundWinner = "tie";
    console.log(roundWinner)
  }
  if (
    (playerEleccion === "ROCK" && computerEleccion === "SCISSORS") ||
    (playerEleccion === "SCISSORS" && computerEleccion === "PAPER") ||
    (playerEleccion === "PAPER" && computerEleccion === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
    console.log(roundWinner)
  }
  if (
    (computerEleccion === "ROCK" && playerEleccion === "SCISSORS") ||
    (computerEleccion === "SCISSORS" && playerEleccion === "PAPER") ||
    (computerEleccion === "PAPER" && playerEleccion === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
    console.log(roundWinner)
  }
};
game(computerPlay(), playerSelection())
