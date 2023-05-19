/*i need to remind you two important things ; 
first you should define your random number inside your function so a new number will appear each time we run
the function , otherwise we will have the same number each time we run the script.
and last but not least , don't forget to call the function that finds the random number inside the function that 
sets the result*/

let computerMove = '';
let result = '';

function computer() {

 const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
}


function playGame(playerMove) {
    computer();

    if (playerMove == 'rock') {

        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You Lose!';
        } else if (computerMove === 'scissors') {
            result = 'You Win!';
        }

    } else if (playerMove == 'paper') {

        if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'rock') {
            result = 'You Win!';
        } else if (computerMove === 'scissors') {
            result = 'You Lose!';
        }

    } else if (playerMove == 'scissors') {
        if (computerMove === 'scissors') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You Win!';
        } else if (computerMove === 'rock') {
            result = 'You Lose!'
        }
    }

    alert(`You Picked ${playerMove}, computer picked ${computerMove}, ${result}`)
}


