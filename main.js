// //Task 1

// let playerMove = prompt("User input value");
// let randomInt = Math.floor(Math.random() * 3);
// console.log(randomInt);

// if (randomInt < 1) {
//     computerMove = "rock"
// } else if (randomInt >= 2) {
//     computerMove = "paper";
// } else {
//     computerMove = "scissors";
// }

// console.log(computerMove);
// /*if player move is rock and computer move is rock = draw
// if player move is rock and computer move is paper = player lose
// if player move is rock...*/

// // Task 2
// /*Take the if statements that you've written and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return...

// - 1 if player1 wins
// - 0 if it is a draw
// - -1 if player1 loses (player2 wins)

// The function should be able to be used like so...

// ```js
// function getWinner(player1, player2) {
//   // code goes here...
// }

// let result = getWinner("rock", "paper");
// ```
// This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number. */

// function getWinner(playerMove, computerMove) {
//     if (playerMove === "rock" && computerMove === "rock") {
//         return (0);
//     }
//     if (playerMove === "rock" && computerMove === "paper") {
//         return (-1);
//     }
//     if (playerMove === "rock" && computerMove === "scissors") {
//         return (1);
//     }

//     if (playerMove === "scissors" && computerMove === "scissors") {
//         return (0);
//     }
//     if (playerMove === "scissors" && computerMove === "rock") {
//         return (-1);
//     }
//     if (playerMove === "scissors" && computerMove === "paper") {
//         return (1);
//     }

//     if (playerMove === "paper" && computerMove === "paper") {
//         return (0);
//     }
//     if (playerMove === "paper" && computerMove === "scissors") {
//         return (-1);
//     }
//     if (playerMove === "paper" && computerMove === "rock") {
//         return (1);
//     }
// }

// console.log((getWinner(playerMove, computerMove)));

//while (confirm("play again" === true)) {
/*## Task 3: User Input

Using `prompt`, get a user inputted value for the player move. Then call your function with that value and the hard coded computer move. Display the result using `alert`. */

/*## Task 4: Computer Player

Write a function that generates a random computer move (`Math.random()` might be useful...). Use that function to make a dynamic
 game where the computer move is randomly chosen every time.

 ## Task 5: Game Loop

Now that we have a fully functioning game, our next step is to have it run as many times as people like without having to refresh the page.

Use a `while loop` and `confirm`.

This will be deemed as complete when a player can keep playing indefinitely, and has the option to stop playing after every round.*/

//Refactor the code and the game using DOM

let loss = 0;
let ties = 0;
let wins = 0;
let rounds = 0;
let imageUrl = "";
let rockImg = "";
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let tieScore = document.getElementById("tiesScore");
let roundsNumber = document.getElementById("roundsNumber");
let computerChoiceImageCard = document.getElementById("computerChoice");
let playerChoiceImageCard = document.getElementById("playerChoice");

let rockButton = document.getElementById("rockButton");
let scissorsButton = document.getElementById("scissorsButton");
let paperButton = document.getElementById("paperButton");
let resetButton = document.getElementById("reset");

function pickTheRock() {
  rounds += 1;
  roundsNumber.innerText = `${rounds}`;
  playerChoiceImageCard.src = "./images/rockPlayer.png";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    console.log("test");
    ties = ties + 1;
    console.log(ties);
    tieScore.innerText = `${ties}`;
    imageUrl = "rockComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 2) {
    console.log("computer wins");
    loss = loss + 1;
    computerScore.innerText = `${loss}`;
    imageUrl = "paperComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 3) {
    console.log("you won");
    wins = wins + 1;
    playerScore.innerText = `${wins}`;
    imageUrl = "scissorsComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  }
}

function pickTheScissors() {
  rounds += 1;
  roundsNumber.innerText = `${rounds}`;
  playerChoiceImageCard.src = "./images/scissorsPlayer.png";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    console.log("test");
    ties = ties + 1;
    console.log(ties);
    tieScore.innerText = `${ties}`;
    imageUrl = "scissorsComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 2) {
    console.log("computer wins");
    loss = loss + 1;
    computerScore.innerText = `${loss}`;
    imageUrl = "rockComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 3) {
    console.log("you won");
    wins = wins + 1;
    playerScore.innerText = `${wins}`;
    imageUrl = "paperComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  }
}

function pickThePaper() {
  rounds += 1;
  roundsNumber.innerText = `${rounds}`;

  playerChoiceImageCard.src = "./images/paperPlayer.png";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    console.log("test");
    ties = ties + 1;
    console.log(ties);
    tieScore.innerText = `${ties}`;
    imageUrl = "paperComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 2) {
    console.log("computer wins");
    loss = loss + 1;
    computerScore.innerText = `${loss}`;
    imageUrl = "scissorsComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  } else if (randomNumber === 3) {
    console.log("you won");
    wins = wins + 1;
    playerScore.innerText = `${wins}`;
    imageUrl = "rockComputer.png";
    console.log(imageUrl);
    computerChoiceImageCard.src = `./images/${imageUrl}`;
  }
}

function resetGame() {
  rounds = 0;
  roundsNumber.innerText = `${rounds}`;
  computerChoiceImageCard.src = "./images/rockComputer.png";
  playerChoiceImageCard.src = "./images/rockPlayer.png";
  wins = 0;
  playerScore.innerText = `${wins}`;
  loss = 0;
  computerScore.innerText = `${loss}`;
  ties = 0;
  tieScore.innerText = `${ties}`;
}

// function playerName() {}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let name = prompt("Please insert your name to play the game");
    let text = document.getElementById("playerName");
    text.innerText = `${name}`;
  },
  false
);

resetButton.addEventListener("click", resetGame);
rockButton.addEventListener("click", pickTheRock);
scissorsButton.addEventListener("click", pickTheScissors);
paperButton.addEventListener("click", pickThePaper);
