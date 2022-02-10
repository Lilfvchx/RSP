//Creo generador aleatorio de seleccion en un array para competir contra el user
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}
function userPlay() {
  let userSelection = String(prompt("Que elegis?")).toLowerCase()

  return userSelection
}

let scorehuman = 0;
let scorecomputer = 0;
/////////////////////////////////////////////////////////////////////////
function ganador(computerSelection, playerSelection) {
  let showWin = (resultado) => {console.log(`${resultado}!`)}
  
  if (playerSelection === computerSelection) {
    showWin("empate")
  }
  
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
     scorehuman=scorehuman+1
     console.log("gano el humano")
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
     scorecomputer=scorecomputer+1
     console.log("gano la computadora")}
}

function game() {
  for (let index = 0; index<5; index++) {
    ganador(computerPlay(), userPlay());
  }
  if (scorehuman>scorecomputer) {
    return console.log("EL HUMANO GANO ");
  }
  if (scorecomputer>scorehuman){
    return console.log("La maquina gano")
  }
  if (scorecomputer === scorehuman) {
    return console.log("EMPATE   ");
  }
}
game();
