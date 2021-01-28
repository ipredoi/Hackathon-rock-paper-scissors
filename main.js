//Task 1

let playerMove = prompt("User input value");
let randomInt = Math.floor(Math.random() * 3);
console.log(randomInt);


if (randomInt < 1) {
    computerMove = "rock"
} else if (randomInt >= 2) {
    computerMove = "paper";
} else {
    computerMove = "scissors";
}

console.log(computerMove);
/*if player move is rock and computer move is rock = draw
if player move is rock and computer move is paper = player lose
if player move is rock...*/

// Task 2
/*Take the if statements that you've written and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return...

- 1 if player1 wins
- 0 if it is a draw
- -1 if player1 loses (player2 wins)

The function should be able to be used like so...

```js
function getWinner(player1, player2) {
  // code goes here...
}

let result = getWinner("rock", "paper");
```
This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number. */

function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "rock") {
        return (0);
    }
    if (playerMove === "rock" && computerMove === "paper") {
        return (-1);
    }
    if (playerMove === "rock" && computerMove === "scissors") {
        return (1);
    }

    if (playerMove === "scissors" && computerMove === "scissors") {
        return (0);
    }
    if (playerMove === "scissors" && computerMove === "rock") {
        return (-1);
    }
    if (playerMove === "scissors" && computerMove === "paper") {
        return (1);
    }

    if (playerMove === "paper" && computerMove === "paper") {
        return (0);
    }
    if (playerMove === "paper" && computerMove === "scissors") {
        return (-1);
    }
    if (playerMove === "paper" && computerMove === "rock") {
        return (1);
    }
}


console.log((getWinner(playerMove, computerMove)));

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







