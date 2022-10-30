function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection)
        wins++;
        losses++;
    if (playerSelection=="rock")
        if (computerSelection=="paper")
            losses++;
            else wins++;
    if (playerSelection=="paper")
        if (computerSelection=="scissors")
            losses++;
            else wins++;
    if (playerSelection=="scissors")
        if (computerSelection=="rock")
            losses++;
            else wins++;
    document.querySelector('.score');
    const scoretext=document.createElement('p');
    scoretext.textContent=`The score is ${wins}:${losses}`;
    console.log(wins);
        
  }

  function getComputerChoice(){
    return choises[Math.floor(Math.random()*choises.length)];
  }
  
  function startGame(){
    let btn = document.querySelector(".button");
    console.log(btn.id);
    //btn.addEventListener('click', console.log(this));
       // btn.forEach((alegere) =>{
       // alegere.addEventListener(('click'),() =>{console.log(alegere.id);playRound(alegere.id, getComputerChoice);})})
}
startGame();
let wins=0;
let losses=0;
const choises=["rock","paper","scissors"];
