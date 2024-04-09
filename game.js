const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton =document.getElementById("resetButton");
let playerScore = 0;
let computerScore = 0;

resetButton.addEventListener('click',function(){
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  resultDisplay.textContent = "";
})



function playGame(playerChoice){

  const computerChoice= choices[Math.floor(Math.random() * choices.length)];
  
  let result = "";

  if(playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else{
    switch (playerChoice){
      case "rock":
         result=(computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result=(computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result=(computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  

  switch (result){
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;

      playerScoreDisplay.textContent = playerScore;
      break;

    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;

      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
