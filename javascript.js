const choises=["rock","paper","scissors"]
let wins=0;
let losses=0;

startGame();

function playRound(playerSelection) {
    let computerChoice=getComputerChoice();
    let result= rps( playerSelection , computerChoice );
    if(result=="win")
        wins++;
        else if(result=="lost")
                losses++;
    scoretext = document.querySelector('p');
    scoretext.textContent=`The score is ${wins}:${losses}`;
    checkWinner(wins,losses);
  }

function rps(playerSelection,computerChoice){
    console.log(playerSelection, computerChoice)
    if (playerSelection==computerChoice)
        return "tie";
        else if ((playerSelection=="rock" && computerChoice=="scissors") || 
        (playerSelection=="paper" && computerChoice=="rock")||
        (playerSelection=="scissors" && computerChoice=="paper"))
                return "win"; 
                else return "lost";
} 

  function checkWinner(wins,losses){
    if(wins==5){
        document.querySelector('p').textContent='You won!!!';
        resetGame();
    }
    if(losses==5){
        document.querySelector('p').textContent='You Lost :(';
        resetGame();
    }
  }
function resetGame(){
  wins=0;
  losses=0;
}

  function getComputerChoice(){
    return choises[Math.floor(Math.random()*choises.length)];
  }
  
  function startGame(){
    
    let btn = document.querySelectorAll(".button");
    btn.forEach((alegere) =>{
      alegere.addEventListener(('click'),() =>{playRound(alegere.id);})})
}