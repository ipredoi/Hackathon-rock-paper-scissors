//Task 1

let playerMove = ["rock", "paper", "scissors"];
let computerMove = ["rock", "paper", "scissors"];

if ((playerMove[0] === computerMove[0])||(playerMove[1] === computerMove[1])||(playerMove[2] === computerMove[2])) {
    console.log("draw");
}
if ((playerMove[0] !== computerMove[2])||(playerMove[1] !== computerMove[0])||(playerMove[2] !== computerMove[1])) {
    console.log("you win");
}
if ((playerMove[1] !== computerMove[2])||(playerMove[2] !== computerMove[0])||(playerMove[0] !== computerMove[1])) {
    console.log("you lose");
}

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




