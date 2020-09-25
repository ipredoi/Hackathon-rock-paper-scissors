//Task 1

let playerMove = "rock";
let computerMove = "paper";
/*if player move is rock and computer move is rock = draw
if player move is rock and computer move is paper = player lose
if player move is rock...*/
/*if (playerMove === "rock" && computerMove === "rock") {
    console.log("draw")
}
if (playerMove === "rock" && computerMove === "paper") {
    console.log("lose")
}
if (playerMove === "rock" && computerMove === "scissors") {
    console.log("win")
}

if (playerMove === "scissors" && computerMove === "scissors") {
    console.log("draw")
}
if (playerMove === "scissors" && computerMove === "rock") {
    console.log("lose")
}
if (playerMove === "scissors" && computerMove === "paper") {
    console.log("win")
}

if (playerMove === "paper" && computerMove === "paper") {
    console.log("draw")
}
if (playerMove === "paper" && computerMove === "scissors") {
    console.log("lose")
}
if (playerMove === "paper" && computerMove === "rock") {
    console.log("win")
}  */




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
playerMove= prompt("User input value");

function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "rock") {
        return(0);
    }
    if (playerMove === "rock" && computerMove === "paper") {
        return(-1);
    }
    if (playerMove === "rock" && computerMove === "scissors") {
        return(1);
    }
    
    if (playerMove === "scissors" && computerMove === "scissors") {
        return(0);
    }
    if (playerMove === "scissors" && computerMove === "rock") {
        return(-1);
    }
    if (playerMove === "scissors" && computerMove === "paper") {
        return(1);
    }
    
    if (playerMove === "paper" && computerMove === "paper") {
        return(0);
    }
    if (playerMove === "paper" && computerMove === "scissors") {
        return(-1);
    }
    if (playerMove === "paper" && computerMove === "rock") {
        return(1);
    }
}

alert (getWinner(playerMove, computerMove));


/*## Task 3: User Input

Using `prompt`, get a user inputted value for the player move. Then call your function with that value and the hard coded computer move. Display the result using `alert`. */

playerMove= prompt("User input value");

console.log(playerMove);






