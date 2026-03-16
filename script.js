function playGame(userChoice) {
    const choices = ['Stone', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie! 🤝";
    } 
    else if (
        (userChoice === 'Stone' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Stone') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = "You Win! 🎉";
    } 
    else {
        result = "Computer Wins! 💻";
    }
    document.getElementById('game-result').innerHTML = 
        `You: ${userChoice} | CPU: ${computerChoice} <br><br> ${result}`;
}