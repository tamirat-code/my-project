const game=["Rock","scissors","paper"];
let HumanScore=0;
let ComputerScore=0;
function getComputerChoice(){
return game[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
const input=window.prompt("enter your choice");

return input;
}
function playRound(HumanChoice,ComputerChoice){
HumanChoice=HumanChoice.toLowerCase();
ComputerChoice=ComputerChoice.toLowerCase();

if((ComputerChoice=="rock"&&HumanChoice=="paper")||(ComputerChoice=="paper"&&HumanChoice=="scissors")||(ComputerChoice=="scissors"&&HumanChoice=="rock")){
console.log("you win");
HumanScore++;

}
else if((ComputerChoice=="paper"&&HumanChoice=="rock")||(ComputerChoice=="scissors"&&HumanChoice=="paper")||(ComputerChoice=="rock"&&HumanChoice=="scissors")){
console.log("you lose!");
ComputerScore++;
}
}

  function playGame(){
    for(let i=0; i<5; i++){
        const HumanChoice = getHumanChoice();
        const ComputerChoice = getComputerChoice();
        playRound(HumanChoice, ComputerChoice);
    }

    console.log("Final Scores:");
    console.log("Human: " + HumanScore);
    console.log("Computer: " + ComputerScore);
}


  
playGame();
