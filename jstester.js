function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {return "It's a Draw"}
    else if ((playerSelection === 'rock' && computerSelection === "scissors") ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)}`
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)}`
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let numOfGames = 1; numOfGames < 6; numOfGames++) {
        const playerSelection = prompt("Rock, Paper or Scissors?")
        const result = (playRound(playerSelection, computerPlay()));
        console.log(result);
        if (result.indexOf('Win') !== -1) {playerWins++}
        else if (result.indexOf('Lose') !== -1) {computerWins++}
    }
    if (playerWins > computerWins) {console.log(`You win by ${playerWins} points to ${computerWins}`)}
    else if (computerWins > playerWins) {console.log(`Computer wins by ${computerWins} points to ${playerWins}`)}
}

game()
