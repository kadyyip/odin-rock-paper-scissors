function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceInd = getRandomInt(3);
    return choices[choiceInd];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "Rock" && playerSelection === "Scissors") || 
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `It's a tie! You both played ${computerSelection}.`;
    }
}

function resetGame() {
    const body = document.querySelector("body")
    playerScore = 0;
    cpuScore = 0;
    playerScoreDiv.textContent = playerScore;
    cpuScoreDiv.textContent = cpuScore;
    winner.textContent = "First to 5 wins!";
    body.removeChild(document.getElementsByClassName("play-again")[0]);
    results.textContent = "";
}

function playRoundWhenClicked(playerSelection) {
    if (playerScore < 5 && cpuScore < 5) {
        let computerSelection = getComputerChoice();
        results.textContent = playRound(playerSelection, computerSelection);
        updateRoundInfo(playerSelection, computerSelection);
        updateScore();
        declareWinner(playerScore, cpuScore);
    }
    else return
}

function updateRoundInfo(playerSelection, computerSelection) {
    round.textContent = `Round ${roundNum}: You played ${playerSelection}. 
        Computer played ${computerSelection}.`;
    roundNum++;
}

function displayPlayAgain() {
    const body = document.querySelector("body")
    const playAgain = document.createElement("div");
    const btn = document.createElement("button");
    playAgain.classList.add("play-again");
    btn.innerHTML = "Play Again?";
    playAgain.appendChild(btn);
    body.appendChild(playAgain);
    btn.addEventListener('click', resetGame);
}
function updateScore() {
    if (results.textContent.startsWith("You win")) {
        playerScore++;
    } else if (results.textContent.startsWith("You lose")) {
        cpuScore++;
    } else return;
    playerScoreDiv.textContent = playerScore;
    cpuScoreDiv.textContent = cpuScore;
}


function declareWinner(playerScore, cpuScore) {
    if (cpuScore === 5) {
        winner.textContent = "Sorry, you lose!";
        displayPlayAgain();
    } else if (playerScore === 5) {
        winner.textContent = "Congratulations, you win!";
        displayPlayAgain();
    } else return;
}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const results = document.querySelector(".results");
const playerScoreDiv = document.querySelector(".player-score");
const cpuScoreDiv = document.querySelector(".cpu-score");
const winner = document.querySelector(".winner");
const round = document.querySelector(".round-info");
let playerScore = 0;
let cpuScore = 0;
let roundNum = 1;

rockBtn.addEventListener("click", () => playRoundWhenClicked("Rock"));
paperBtn.addEventListener("click", () => playRoundWhenClicked("Paper"));
scissorsBtn.addEventListener("click", () => playRoundWhenClicked("Scissors"));