//Problem:  Design a Rock Paper Scissors game
//Plan:  Use random numbers 1-3; assign numbers to R/P/S;
//Divide:  Prompt user to pick R/P/S; compare against computers random pick; console.log result



function game() {
    let resultsArr = [];
    for(let round = 0; round < 6; round++) {
        document.getElementById("round").innerHTML = round;
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
        //compare results
            function compare() {
                console.log(`Comp = ${compPlay} & Player = ${userPlay}`);
                if(compPlay == userPlay) {
                    var result = "It's a tie! Computer: " + compPlay + ",  Player: "  + userPlay;
                    resultsArr.push("<br>" + result);
                    document.getElementById("result").innerHTML = resultsArr;
                    console.log(result);
                    alert(result);
                    return;
                } else if((compPlay == "Rock" && userPlay == "Scissors") || (compPlay == "Paper" && userPlay == "Rock") || (compPlay == "Scissors" && userPlay == "Paper")) {
                    var result = "Computer wins!  Computer: " + compPlay + ",  Player: "  + userPlay;
                    resultsArr.push("<br>" + result);
                    document.getElementById("result").innerHTML = resultsArr;
                    console.log(result);
                    alert(result);
                    return;
                } else {
                    var result = "Player wins!  Computer: " + compPlay + ",  Player: " + userPlay; 
                    resultsArr.push("<br>" + result);
                    document.getElementById("result").innerHTML = resultsArr;
                    console.log(result);
                    alert(result);
                    return;
                    }
                }
            }
            play();
        }
        computerPlay();
    }
}