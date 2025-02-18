// Choice and Score Trackers
let userChoice = "";
let humanScore = 0;
let computerScore = 0;

// Reference to Labels and Buttons
let container = document.querySelector(".container");
let humanScoreLabel = document.querySelector(".user-score > p");
let computerScoreLabel = document.querySelector(".computer-score > p");
let statusLabel = document.querySelector(".status-code");
const buttons = document.querySelectorAll("button");

// Apply EventListeners -> Game starts Here
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const humanSelection = button.id;
		const computerSelection = getComputerChoice();

		console.log(playRound(humanSelection, computerSelection));

		// Check if game gets to round 5 and ends game.
		if (humanScore === 5 || computerScore === 5) {
			buttons.forEach((button) => {
				button.disabled = true;
			});

			container.classList.toggle("blur");

			let buttonContainer = document.createElement("div");
			let clearButton = document.createElement("button");
			let cancelButton = document.createElement("button");

			cancelButton.textContent = "Close";
			clearButton.textContent = "Start Again";

			buttonContainer.classList.toggle("overlay");
			buttonContainer.classList.toggle("btn-overlay");
			clearButton.classList.toggle("tool-btn");
			cancelButton.classList.toggle("tool-btn");

			buttonContainer.appendChild(clearButton);
			buttonContainer.appendChild(cancelButton);
			document.body.appendChild(buttonContainer);

			cancelButton.addEventListener("click", () => {
				container.classList.toggle("blur");
				clearButton.remove();
				cancelButton.remove();
				buttonContainer.remove();
			});

			clearButton.addEventListener("click", () => {
				buttons.forEach((button) => {
					button.disabled = false;
				});
				resetGame();
				clearButton.remove();
				cancelButton.remove();
			});
		}
	});
});

function resetGame() {
	humanScore = 0;
	computerScore = 0;
	container.classList.toggle("blur");
	displayChoice("human", "");
	displayChoice("computer", "");
	statusLabel.textContent = "start game";
	humanScoreLabel.textContent = "0";
	computerScoreLabel.textContent = "0";
}

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

function gameChoiceNum(str, opp) {
	if (str === "rock" && opp == "paper") return -2;
	if (str === "rock") return 2;
	if (str === "scissors") return 1;
	if (str === "paper") return 0;
}

function selectChoiceUI(choice) {
	switch (choice) {
		case "rock":
			textContent = "🪨";
			break;
		case "paper":
			textContent = "📃";
			break;
		case "scissors":
			textContent = "✂️";
	}

	return textContent;
}

function displayChoice(user, content) {
	if (user === "computer") {
		const computer = document.querySelector(".computer-choice");
		computer.textContent = content;
	} else if (user === "human") {
		const human = document.querySelector(".user-choice");
		human.textContent = content;
	}
}

function playRound(humanChoice, computerChoice) {
	displayChoice("human", selectChoiceUI(humanChoice));
	displayChoice("computer", selectChoiceUI(computerChoice));

	let humanChoiceNum = gameChoiceNum(humanChoice, computerChoice);
	let computerChoiceNum = gameChoiceNum(computerChoice, humanChoice);

	if (humanChoiceNum > computerChoiceNum) {
		humanScore += 1;
		statusLabel.textContent = "beats";
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	} else if (humanChoiceNum == computerChoiceNum) {
		statusLabel.textContent = "draws";
		console.log(`A draw. A worthy opponent.`);
	} else {
		computerScore += 1;
		statusLabel.textContent = "loses to";
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	}

	humanScoreLabel.textContent = humanScore === 5 ? "You win!" : `${humanScore}`;
	computerScoreLabel.textContent =
		computerScore === 5 ? "Computer wins" : `${computerScore}`;
}

function playGame(round) {
	for (let index = 1; index <= round; index++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		console.log(`Round ${index}`);
		console.log(playRound(humanSelection, computerSelection));
	}

	console.log(`Human: ${humanScore}. Computer: ${computerScore}`);
	console.log(declareWinner(humanScore, computerScore));
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
