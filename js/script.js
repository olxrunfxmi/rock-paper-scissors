function getComputerChoice() {
	const Randomizer = Math.floor(Math.random() * 10);

	if (Randomizer <= 3) {
		return "rock";
	} else if (Randomizer > 3 && Randomizer <= 6) {
		return "paper";
	} else if (Randomizer > 6) {
		return "scissors";
	}
}

function getHumanChoice() {
	let humanChoice, formatHumanChoice;

	while (true) {
		humanChoice = prompt("Rock, paper, scissors:");
		if (humanChoice != null) {
			formatHumanChoice = humanChoice.toLowerCase();
		}

		if (
			formatHumanChoice === "rock" ||
			formatHumanChoice === "paper" ||
			formatHumanChoice === "scissors"
		) {
			break;
		}
	}

	return formatHumanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	let humanChoiceNum = gameChoiceNum(humanChoice, computerChoice);
	let computerChoiceNum = gameChoiceNum(computerChoice, humanChoice);

	if (humanChoiceNum > computerChoiceNum) {
		return `You win! ${humanChoice} beats ${computerChoice}`;
	} else if (humanChoiceNum == computerChoiceNum) {
		return `A draw. A worthy opponent.`;
	} else {
		return `You lose! ${computerChoice} beats ${humanChoice}`;
	}
}

function gameChoiceNum(str, opp) {
	if (str === "rock" && opp == "paper") return -2;
	if (str === "rock") return 2;
	if (str === "scissors") return 1;
	if (str === "paper") return 0;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Debugger
console.log("Human:" + humanSelection);
console.log("Computer:" + computerSelection);
// Debugger

console.log(playRound(humanSelection, computerSelection));
