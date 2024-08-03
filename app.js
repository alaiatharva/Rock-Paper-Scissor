let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScr = document.querySelector("#user-score");
let compScr = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
}

const gameDraw = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor ="#0d1b2a";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScr.innerText = userScore;
    } else {
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScr.innerText = compScore;
    }
} 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});