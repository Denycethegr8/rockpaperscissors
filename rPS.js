let computerScore = 0;
let userScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const usersScore = document.getElementById('userScore');
const computersScore = document.getElementById('computerScore')
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const score = document.getElementById('score');
const gameButton = document.querySelectorAll('.game_button');
const markComp = document.querySelector('.mark_comp_select');

usersScore.textContent = userScore;
computersScore.textContent = computerScore;


//randomly generate rock(0), paper(1), scissors(2)

let computerPlay = function(){
    const arr = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random()*3);
    return arr[i];
}


// do one round of game and get result (win, lose, draw)

function oneRound(userSelect){
    const computerSelect = computerPlay();
    switch (userSelect + computerSelect){
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            win(userSelect, computerSelect);
            markScore(computerSelect);
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            lose(userSelect, computerSelect);
            markScore(computerSelect);
            break;
        default:
            draw();
            markScore(computerSelect);
            break;                        
    }
}

function markScore(computerSelect){
    // markUser.textContent = gameButton.innerHTML;
    markComp.textContent = letterToEmoji(computerSelect);
}

function letterToEmoji(letter){
    if (letter === 'rock') return '✊'
    else if (letter === 'paper') return '🖐️'
    else return '✌️'
}

// set what happens when win, lose, draw

function win(userSelect, computerSelect){
    result.textContent = `${convertToBig(userSelect)} beats ${convertToBig(computerSelect)}, User wins!`;
    userScore++;
    usersScore.textContent = userScore;
    computersScore.textContent = computerScore;
    if (userScore >= 5) {
        result.textContent = 'YOU WON THE GAME, CONGRATS! 👏'
        gameButton.forEach(rps => rps.setAttribute('disabled', true));
    }
}

function lose(userSelect, computerSelect){
    result.textContent = `${convertToBig(computerSelect)} beats ${convertToBig(userSelect)}, Computer wins!`;
    computerScore++;
    usersScore.textContent = userScore;
    computersScore.textContent = computerScore;
    if (computerScore >= 5) {
        result.textContent = 'YOU LOST, GOOD GAME! 🙌'
        gameButton.forEach(rps => rps.setAttribute('disabled', true));
    }
}
function draw(){
    result.textContent = 'Draw!';
}


// convert small letters to capital letters to show on the page

function convertToBig(small){
    if (small === 'rock') return 'ROCK';
    else if (small === 'paper') return 'PAPER';
    else return 'SCISSORS';
}


// combine all in one

function main(){
    rock.addEventListener('click', function(){
        oneRound('rock');
    })
    paper.addEventListener('click', function(){
        oneRound('paper');
    })
    scissors.addEventListener('click', function(){
        oneRound('scissors');
    })
}


main()


//restart the game

restart.addEventListener('click', function(){
    computerScore = 0;
    userScore = 0;
    result.textContent = '';   
    usersScore.textContent = userScore;
    computersScore.textContent = computerScore;
    gameButton.forEach(rps => rps.removeAttribute('disabled', true));
    markComp.textContent = '';
}
)



//one round of rock paper scissors

// function oneRound(playerSelection, computerSelection){
//     switch (playerSelection + computerSelection){
//         case 
//     }
//     if (playerSelection === computerSelection){
//         result.textContent = 'Draw!';
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
//         result.textContent = 'You win!';
//     } else { 
//         result.textContent = 'I win!';
//     }
// }

// rock.addEventListener('click', e => console.log(e.target));
// paper.addEventListener('click', function(){oneRound('paper', computerPlay())});
// scissors.addEventListener('click', function(){oneRound('scissors', computerPlay())});

// play game n times

// let playerScore = 0;
// let computerScore = 0;
// function multipleRounds(playerSelection, computerSelection){
//     while (playerScore < 5 && computerScore < 5){
//         oneRound(playerSelection, computerSelection);
//         if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
//             playerScore ++;
//         } else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper' || computerSelection === 'paper' && computerSelection === 'rock'){
//             computerScore ++;
//         } else {
//             computerScore = computerScore;
//         }
//         } if (playerScore <= 5 && playerScore > computerScore){
//             return 'You win! Congrats!';
//         } else if (playerScore > computerScore){
//             return 'I win! Good game!';
//     } 
// }

// multipleRounds(isItOk, computerPlay);
// const test1 = () => console.log(1-2);

// test.addEventListener('click', test1);

// const finalResult = document.querySelector('h3');


// ( playerScore >= 5 || computerScore >= 5 ) ? multipleRounds : finalResult.textContent('Final Result');