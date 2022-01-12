// Objective:  Re-write code to include clickable buttons to play.  Check code for efficiency, ensure all functions work.

// global variables
let rounds = 0;
let win = 0;
let lose = 0;
let tie = 0;
let percent = 0;
let userPlay = "";
let compPlay = "";
let result = "";
let resultMsg = "";
let resultsArr = [];
let wonFive = false;
let alertResult = false;

// player text input w entry validation 
function game() {
    userPlay = document.querySelector('input').value;
    userPlay = userPlay.trim();
    userPlay = (userPlay.charAt(0).toUpperCase() + userPlay.slice(1));
    console.log(`Player chooses ${userPlay}`);
    if(userPlay !== "Rock" && userPlay !== "Paper" && userPlay !== "Scissors") {
        alert("Please enter a valid option!");
        document.getElementById("textPlay").reset();
        return;
    } else {
        document.getElementById("textPlay").reset();
        alertResult = true;
        computer();
    }
}

// player button selection 
const buttonRock = document.getElementById('btn1');
btn1.addEventListener('click', playRock);
function playRock() {
    userPlay = "Rock";
    console.log(userPlay);
    computer();
}
const buttonPaper = document.getElementById('btn2');
btn2.addEventListener('click', playPaper);
function playPaper() {
    userPlay = "Paper";
    console.log(userPlay);
    computer();
}
const buttonScissors = document.getElementById('btn3');
btn3.addEventListener('click', playScissors);
function playScissors() {
    userPlay = "Scissors";
    console.log(userPlay);
    computer();
}

// computer selection 
function computer() {
    let randomPlay = Math.floor(Math.random() * 3 ) + 1;
    rounds++;
    if(randomPlay === 1) {
        compPlay = "Rock";
    } else if(randomPlay === 2) {
        compPlay = "Paper";
    } else {
        compPlay = "Scissors";
    }
    console.log(`Computer chooses ${compPlay}`);
    compare();
}

// compare player selection against computer selection
function compare() {
    console.log(`Comp = ${compPlay} & Player = ${userPlay}`);
    resultsArr = [];
    if(compPlay === userPlay) {
        result = "<strong><u>It's a tie.</u></strong> <br>Computer: " + compPlay + "<br>Player: "  + userPlay;
        resultMsg = "It's a tie.\n\nComputer: " + compPlay + "\nPlayer: " + userPlay;
        tie++;
        printResults();
    } else if((compPlay === "Rock" && userPlay === "Scissors") || (compPlay === "Paper" && userPlay === "Rock") || (compPlay === "Scissors" && userPlay === "Paper")) {
        result = "<strong><u>You lose.</u></strong> <br>Computer: " + compPlay + "<br>Player: "  + userPlay;
        resultMsg = "You lose.\n\nComputer: " + compPlay + "\nPlayer: "  + userPlay;
        lose++;
        printResults();
    } else {
        result = "<strong><u>Player wins!</u></strong> <br>Computer: " + compPlay + "<br>Player: " + userPlay; 
        resultMsg = "Player wins!\n\nComputer: " + compPlay + "\nPlayer: " + userPlay; 
        win++;
        printResults();
    }
}

// updates game results stats
function printResults() {
    win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
    console.log(result);
    resultsArr.push(result);
    document.getElementById("rounds").innerText = rounds;
    document.getElementById("tie").innerText = tie;
    document.getElementById("lose").innerText = lose;
    document.getElementById("win").innerText = win;
    document.getElementById("percent").innerText = percent;
    document.getElementById("result").innerHTML = resultsArr;
    if(alertResult === true) {
        alertResult = false;
        alert(resultMsg);
    }
    if(lose === 5 && win < 5 && wonFive === false) {
        alert("Computer won 5 games first.\n\n:(\n\nKeep playing, or click Reset Stats to try again.");
        wonFive = true;
    } else if(win === 5 && lose < 5 && wonFive === false) {
        alert("Congratulations!!\n\nPlayer won 5 games first!\n\n:)");
        wonFive = true;
    }
}

// clicking button returns stats to zero
function resetStats() {
    wonFive = false;
    rounds = 0;
    document.getElementById("rounds").innerText = rounds;
    win = 0;
    document.getElementById("win").innerText = win;
    lose = 0;
    document.getElementById("lose").innerText = lose;
    tie = 0;
    document.getElementById("tie").innerText = tie;
    percent = 0;
    document.getElementById("percent").innerText = percent;
    resultsArr = ["Ready to play, click a button..."];
    document.getElementById("result").innerHTML = resultsArr;
}