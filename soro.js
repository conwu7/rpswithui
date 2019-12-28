const fakeSaveName = (e) => {
    console.log(e.code);
    if(e.code === 'Enter') {
        document.querySelector(".onlyNameLocation").innerHTML =
            document.getElementById('username').value;
        const afterNameDivs = document.querySelectorAll(".afterName");
        for (const div in afterNameDivs) {
            div.classList.remove('afterName')
        }
    }
}

const saveName = (e) => {
    console.log('Atleast this logged');
    document.querySelector(".onlyNameLocation").textContent =
        document.getElementById('username').value;
    let afterNameDivs = document.querySelectorAll(".afterName");
    afterNameDivs.forEach(function(div) {
        div.classList.remove('afterName')
    });
    document.querySelector('.beforeName').classList.add('afterName');
};

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {return 'draw'}
    else if ((playerSelection === 'rock' && computerSelection === "scissors") ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player'
    } else {
        return 'computer'
    }
}

function gameCheck(playerWins, computerWins) {
    if (playerWins > computerWins) {return `You won! The final score is ${playerWins} points to ${computerWins}`}
    else if (computerWins > playerWins) {return `You Lost! Computer wins by ${computerWins} points to ${playerWins}`}
}


let playerscoreDiv = document.querySelector('.currentuserscore');
let currentuserroundDiv = document.querySelector('.currentuserround');
let currentcomputerscoreDiv = document.querySelector('.currentcomputerscore');
let currentplayerscore = 0;
let currentuserround = 0;
let currentcomputerscore = 0;

let resultsDiv = document.querySelector('.result');

function updateScoresAndRounds(e) {
    currentuserround++;
    let computerselection = computerPlay();
    let userselection = e.target.id;
    document.querySelector('.computerreallychose').textContent = computerselection.toUpperCase();
    document.querySelector('.youreallychose').textContent = userselection.toUpperCase();
    const match = playRound(userselection, computerselection);
    if (match==='player') {currentplayerscore++}
    else if (match==='computer') {currentcomputerscore++}
    playerscoreDiv.textContent = currentplayerscore;
    currentuserroundDiv.textContent = currentuserround;
    currentcomputerscoreDiv.textContent = currentcomputerscore;

    if (currentcomputerscore === 5 || currentplayerscore === 5) {
        const result = gameCheck(currentplayerscore, currentcomputerscore);
        resultsDiv.classList.remove('notcomplete');
        document.querySelector('div.gameOver button').classList.remove('notcomplete');
        resultsDiv.textContent = result;
        document.querySelector('.leftContainer').classList.add('notcomplete');
        document.querySelector('.rightContainer').style.width = '100%';
    }
}

document.querySelector("#save").addEventListener('click', saveName);
document.querySelector('.rock').addEventListener('click', updateScoresAndRounds);
document.querySelector('.paper').addEventListener('click',updateScoresAndRounds);
document.querySelector('.scissors').addEventListener('click',updateScoresAndRounds);





