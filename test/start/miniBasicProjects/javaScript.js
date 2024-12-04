let humanScore = 0;
let computerScore = 0;
let attempts, roundsPlayed = 0;
const inputField = document.createElement("div");
inputField.style.whiteSpace = "pre-line";

function getComputerChoice() {
    let randnum = parseInt(Math.random() * 100);
    // console.log("randnum" + randnum);
    // return randnum// === 0 
    if (randnum < 33){
        return "rock";
    }else if(randnum >= 33 && randnum < 66){
        return "paper";
    }else{
        return "scissor";
    }

}

function playRound (humanChoice, computerChoice) {
    if (roundsPlayed >= 5) {
        inputField.textContent += "Game Over! Click 'Start Game' to play again.\n";
        return;
    }
    inputField.textContent+=`Choices => Human: ${humanChoice}, Computer: ${computerChoice} \t\t`;
    
    if (humanChoice === computerChoice){
        inputField.textContent+="It's a draw, try once again\n";
    }else if ( humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissor"){
        inputField.textContent+="Human wins\n";
        humanScore++;
    } else {
        inputField.textContent+="Computer wins\n";
        computerScore++;
    }
    inputField.textContent += `Scores - Human: ${humanScore}, Computer: ${computerScore}\n\n`;
    roundsPlayed++;

    if (roundsPlayed === 5) {
        inputField.textContent += humanScore > computerScore
            ? "\nFinal Result: Human wins the game!"
            : humanScore === computerScore
            ? "\nFinal Result: It's a draw!"
            : "\nFinal Result: Computer wins the game!";
    }

}

function playGame(){
    inputField.textContent = "Game Started! Best of 5 rounds.\n\n";
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // for (let i = 0; i<5; i++){
    //     // console.log("The system choice is : "+ getComputerChoice());
    //     // console.log("The human choice is : "+ getHumanChoice());
    //     playRound(getHumanChoice(), getComputerChoice());
    // }
    // inputField.textContent= "comScore " + computerScore + "humScore " + humanScore;   
    // if (humanScore === computerScore){
    //     inputField.textContent+="\nIt's a DRAW.";
    // } else if (humanScore > computerScore){
    //     inputField.textContent+="\nHuman preveils.";
    // }else{
    //     inputField.textContent+="\nWe are getting SMART.";
    // }

}

// playGame();



const body = document.body;

// const div1 = document.getElementById("rps");
// div1.id = "div1Content";
const roundsToPlaybtn = document.createElement("button");
roundsToPlaybtn.textContent = "like to play ?";
roundsToPlaybtn.onclick = playGame;
document.querySelector("h1").after(roundsToPlaybtn);




const rockbtn = document.createElement("button");
rockbtn.textContent = "rOck";
rockbtn.style.margin = "10px 15px 10px 10px";
rockbtn.onclick = () => playRound("rock", getComputerChoice());


const paperbtn = document.createElement("button");
paperbtn.innerHTML = "paper<br>";
paperbtn.style.margin = "10px 10px 10px 15px";
paperbtn.onclick = () => playRound("paper", getComputerChoice());

const scissorbtn = document.createElement("button");
scissorbtn.textContent = "scissOr";
scissorbtn.style.margin = "10px 10px 10px 20px";
scissorbtn.onclick = () => playRound("scissor", getComputerChoice());




body.append(rockbtn, paperbtn, scissorbtn, inputField);
// body.append(div1);
