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

function gameChoiceNum(str, opp) {
	if (str === "rock" && opp == "paper") return -2;
	if (str === "rock") return 2;
	if (str === "scissors") return 1;
	if (str === "paper") return 0;
}

function playRound(humanChoice, computerChoice) {
	let humanChoiceNum = gameChoiceNum(humanChoice, computerChoice);
	let computerChoiceNum = gameChoiceNum(computerChoice, humanChoice);

	if (humanChoiceNum > computerChoiceNum) {
		humanScore += 1;
		return `You win! ${humanChoice} beats ${computerChoice}`;
	} else if (humanChoiceNum == computerChoiceNum) {
		return `A draw. A worthy opponent.`;
	} else {
		computerScore += 1;
		return `You lose! ${computerChoice} beats ${humanChoice}`;
	}
}

function playGame(round) {
	for (let index = 1; index <= round; index++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		console.log(`Round ${index}`);
		console.log(playRound(humanSelection, computerSelection));
	}
}

function declareWinner(humanScore, computerScore) {
	if (humanScore > computerScore) {
		return "You win.";
	} else if (computerScore > humanScore) {
		return "Computer wins.";
	} else {
		return "A draw";
	}
}

let humanScore = 0;
let computerScore = 0;

playGame(5);

console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);
console.log(declareWinner(humanScore, computerScore));
