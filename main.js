/*Task 1: Logic
To complete this ticket you will need a set of if statements that will determine the winner of rock paper scissors. The two moves should be stored in two variables like so...

let playerMove = "rock";
let computerMove = "paper";
This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly.

e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.*/

let playerMove = ["rock", "paper", "scissors"];
let computerMove = ["rock", "paper", "scissors"];
if (playerMove[0] && computerMove[1]) {
    console.log("rock lose to paper!")
}
if (playerMove[0] && computerMove[2]) {
    console.log("rock beats scissors !");
}
if (playerMove[1] && computerMove[0]) {
    console.log("paper beats rock!")
}
if (playerMove[2] && computerMove[1]) {
    console.log("scissors beats paper!")
}
if (playerMove[1] && computerMove[2]) {
    console.log("paper loses to scissors!")
}
if (playerMove[2] && computerMove[0]) {
    console.log("scissors loses to rock!")
}






/* create 3 moves for computer and user rock paper and scissors.
when player selects rock, paper or scissors the computer resoponds with a random selection of rock paper or scissors.
winner is selected as follows.
rock + scissors = rock win
rock + paper = paper win
rock + rock = draw
scissors + paper = scissors win
scissors + scissors = draw
paper + paper = draw*/
