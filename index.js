//Problem:  Design a Rock Paper Scissors game
//Plan:  Use random numbers 1-3; assign numbers to R/P/S;
//Divide:  Prompt user to pick R/P/S; compare against computers random pick; console.log result

// let compPlay = "";
// let userPlay = ""; 


function computerPlay() {
    let compPlay = "";
    let userPlay = "";

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

    function compare() {
        console.log(`Comp = ${compPlay} & Player = ${userPlay}`);
        if(compPlay == userPlay) {
            console.log(`It's a tie! Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            alert(`It's a tie! Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            return;
        } else if((compPlay == "Rock" && userPlay == "Scissors") || (compPlay == "Paper" && userPlay == "Rock") || (compPlay == "Scissors" && userPlay == "Rock")) {
            console.log(`Computer wins!  Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            alert(`Computer wins!  Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            return;
        } else
            console.log(`Player wins!  Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            alert(`Player wins!  Computer chose ${compPlay}.  Player chose ${userPlay}.`);
            return;
        }
    }
    play();
}