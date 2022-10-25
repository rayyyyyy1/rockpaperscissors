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
        
  }
   let wins=0;
   let losses=0;
  const choises=["rock", "paper","scissors"];
  function getComputerChoice(){
    return choises[Math.floor(Math.random()*choises.length)];
  }
  function getPlayerChoice(){
    let validinput=false;
    while (validinput == false){
    let alegere = prompt("Rock Paper Scissors??");
    if (alegere == null)
        continue;
    let alegerelower = alegere.toLowerCase();
    if (choises.includes(alegerelower)){
        validinput=true;
        return alegerelower;}
  }}
  function game(){
    for(i=1;i<5;i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }
    if (wins>losses)
        console.log("You won");
        else console.log("You lost");
  }
  game()