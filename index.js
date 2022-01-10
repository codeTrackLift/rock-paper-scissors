//Problem:  Design a Rock Paper Scissors game
//Plan:  Use random numbers 1-3; assign numbers to R/P/S;
//Divide:  Prompt user to pick R/P/S; compare against computers random pick; console.log result

let rounds = 0;
let win = 0;
let lose = 0;
let tie = 0;
let percent = 0;

function game() {
    let resultsArr = [];
    for(let rounds = 1; rounds < 4; rounds++) {
        document.getElementById("rounds").innerText = rounds;
        function computerPlay() {
            let compPlay = "";
            let userPlay = "";
        //user plays, check user play, then computer plays
            function play() {
                userPlay = prompt("Enter: Rock, Paper, or Scissors");
                userPlay = userPlay.charAt(0).toUpperCase() + userPlay.slice(1);
                console.log(`Player chooses ${userPlay}`);
                if(userPlay !== "Rock" && userPlay !== "Paper" && userPlay !== "Scissors") {
                    alert("Please enter a valid option!");
                    play();
                } else {
                let randomPlay = Math.floor(Math.random() * 3 ) + 1;
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
        //compare result
            function compare() {
                console.log(`Comp = ${compPlay} & Player = ${userPlay}`);
                if(compPlay == userPlay) {
                    var result = "<strong><u>It's a tie.</u></strong>  Computer: " + compPlay + ",  Player: "  + userPlay;
                    resultsArr.push("<br><br>" + result);
                    tie++;
                    document.getElementById("result").innerHTML = resultsArr;
                    document.getElementById("tie").innerText = tie;
                    console.log(result);
                    win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
                    document.getElementById("percent").innerText = percent;
                    alert("This round is a tie.");
                    return;
                } else if((compPlay == "Rock" && userPlay == "Scissors") || (compPlay == "Paper" && userPlay == "Rock") || (compPlay == "Scissors" && userPlay == "Paper")) {
                    var result = "<strong><u>You lose.</u></strong>  Computer: " + compPlay + ",  Player: "  + userPlay;
                    resultsArr.push("<br><br>" + result);
                    lose++;
                    document.getElementById("result").innerHTML = resultsArr;
                    document.getElementById("lose").innerText = lose;
                    console.log(result);
                    win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
                    document.getElementById("percent").innerText = percent;
                    alert("You lost this round.");
                    return;
                } else {
                    var result = "<strong><u>You win!</u></strong>  Computer: " + compPlay + ",  Player: " + userPlay; 
                    resultsArr.push("<br><br>" + result);
                    win++;
                    document.getElementById("result").innerHTML = resultsArr;
                    document.getElementById("win").innerText = win;
                    console.log(result);
                    win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
                    document.getElementById("percent").innerText = percent;
                    alert("You won this round!");
                    return;
                    }
                }
            }
            play();
        }
        computerPlay();
    }
}

//Problem: Modify RPS game to use button interface rather than text prompts
//Plan: Button enters userPlay variable, compare, print results to array, subsequent button press increments rounds and adds to results array

function buttonPlay(value) {
    let resultsArr = [];
    console.log(`User clicked the ${value} button`);
    userPlay = value;
    let randomPlay = Math.floor(Math.random() * 3 ) + 1;
    rounds++;
    document.getElementById("rounds").innerHTML = rounds;
    if(randomPlay === 1) {
        compPlay = "Rock";
    } else if(randomPlay === 2) {
        compPlay = "Paper";
    } else {
        compPlay = "Scissors";
    }
    console.log(`Computer chooses ${compPlay}`);
    compare();
    function compare() {
        console.log(`Comp = ${compPlay} & Player = ${userPlay}`);
        if(compPlay == userPlay) {
            var result = "<b><u>It's a tie.</u></b> <br>Computer: " + compPlay + "<br>Player: "  + userPlay;
            resultsArr.push(result);
            tie++;
            document.getElementById("result").innerHTML = resultsArr;
            document.getElementById("tie").innerText = tie;
            console.log(result);
            win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
            document.getElementById("percent").innerText = percent;
            return;
        } else if((compPlay == "Rock" && userPlay == "Scissors") || (compPlay == "Paper" && userPlay == "Rock") || (compPlay == "Scissors" && userPlay == "Paper")) {
            var result = "<b><u>You lose.</u></b> <br>Computer: " + compPlay + "<br>Player: "  + userPlay;
            resultsArr.push(result);
            lose++;
            document.getElementById("result").innerHTML = resultsArr;
            document.getElementById("lose").innerText = lose;
            console.log(result);
            win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
            document.getElementById("percent").innerText = percent;
            return;
        } else {
            var result = "<b><u>Player wins!</u></b> <br>Computer: " + compPlay + "<br>Player: " + userPlay; 
            resultsArr.push(result);
            win++;
            document.getElementById("result").innerHTML = resultsArr;
            document.getElementById("win").innerText = win;
            console.log(result);
            win !== 0 ? percent = Math.round((win / rounds) * 100) : "";
            document.getElementById("percent").innerText = percent;
            return;
            
        }
    }
}

//button to reset stats
function resetStats() {
    rounds = 0;
    document.getElementById("rounds").innerHTML = rounds;
    win = 0;
    document.getElementById("win").innerHTML = win;
    lose = 0;
    document.getElementById("lose").innerHTML = lose;
    tie = 0;
    document.getElementById("tie").innerHTML = tie;
    percent = 0;
    document.getElementById("percent").innerHTML = percent;
}