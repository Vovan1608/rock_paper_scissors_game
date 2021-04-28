"use strict";

let userScore = 0;
let computerScore = 0;

const userScoreDOM = document.getElementById("user-score");
const computerScoreDOM = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// functions
const getComputerChoice = () => {
	const choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * choice.length)];
}

const win = (userChoice, computerChoice) => {
	userScore += 1;
	userScoreDOM.innerHTML = userScore;
	computerScoreDOM.innerHTML = computerScore;
	result.innerHTML = `Your choice (${userChoice}) beats machine choice (${computerChoice}). You won!`;
	const target = document.getElementById(userChoice);
	target.classList.add("green-glow");
	setTimeout( () => {
		target.classList.remove("green-glow");
	}, 1000);
}

const lose = (userChoice, computerChoice) => {
	computerScore += 1;
	computerScoreDOM.innerHTML = computerScore;
	userScoreDOM.innerHTML = userScore;
	result.innerHTML = `Machine choice (${computerChoice}) beats your choice (${userChoice}). You lose!`;
	const target = document.getElementById(userChoice);
	target.classList.add("red-glow");
	setTimeout( () => {
		target.classList.remove("red-glow");
	}, 1000);
}

const draw = (userChoice, computerChoice) => {
	userScore += 1;
	computerScore += 1;
	computerScoreDOM.innerHTML = computerScore;
	userScoreDOM.innerHTML = userScore;
	result.innerHTML = `Your choice (${userChoice}) equal machine choice (${computerChoice}). Draw!`;
	const target = document.getElementById(userChoice);
	target.classList.add("grey-glow");
	setTimeout( () => {
		target.classList.remove("grey-glow");
	}, 1000);
}

const game = choice => {
	const computerChoice = getComputerChoice();
	switch(`${choice}-${computerChoice}`) {
		case "paper-rock":
		case "rock-scissors":
		case "scissors-paper":
			win(choice, computerChoice);
			break;
		case "paper-paper":
		case "rock-rock":
		case "scissors-scissors":
			draw(choice, computerChoice);
			break;
		default: lose(choice, computerChoice);
	}
}

// listeners
rock.addEventListener("click", () => game("rock"));
paper.addEventListener("click", () => game("paper"));
scissors.addEventListener("click", () => game("scissors"));