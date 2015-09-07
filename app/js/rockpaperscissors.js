////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'paper'){
        switch (computerMove){
            case 'rock':
                winner = "Player";
                break;
            case 'paper':
                winner = "Tie";
                break;
            case 'scissors':
                winner = "Computer";
                break;
            default:
                winner = "null";
            }
        }
    else if (playerMove === 'rock'){
        switch (computerMove){
            case 'rock':
                winner = "Tie";
                break;
            case 'paper':
                winner = "Computer";
                break;
            case 'scissors':
                winner ="Player";
                break;
            default:
                winner = "null";
        }
    }
    else if (playerMove === 'scissors'){
        switch (computerMove){
            case 'rock':
                winner = "Computer";
                break;
            case 'paper':
                winner = "Player";
                break;
            case 'scissors':
                winner = "Tie";
                break;
            default:
                winner = "null";
        }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var playerMove;
    var computerMove;
    var game = 0;
    var winner;
    var wins = 5;
    
    while (playerWins < wins && computerWins < wins) {
        game+=1;
        
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        console.log('Player picked ' + playerMove + ' and Computer picks ' + computerMove);
        
        winner = getWinner(playerMove, computerMove);
        if (winner === 'Player') {
            playerWins+=1;
        } 
        else if (winner === 'Computer') {
            computerWins+=1;
        }
        
        console.log (winner + ' scores...')
        console.log('Score is ' + playerWins + ' to ' + computerWins);
    }

    var winnerStatement = (playerWins > computerWins) ? "Player you won!!!" : "Computer beat you player...";
    console.log(winnerStatement)
    

}
playToFive();

