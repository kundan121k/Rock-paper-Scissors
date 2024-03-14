let score = JSON.parse(localStorage.getItem("score")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,

};


function handleClick(playerMove) {
  let computerMove = compMove();
  let outcome = '';
  if (playerMove === computerMove) {
    score.Tie += 1;
    outcome = `It's a Tie`;

  } else if (
    (playerMove === "Rock" && computerMove === "Paper") ||
    (playerMove === "Paper" && computerMove === "Scissors") ||
    (playerMove === "Scissors" && computerMove === "Rock")
  ) {
    score.Lose += 1;
    outcome = 'You <img src="images/lose.png" class="move-icon">';

  } else {
    score.Win += 1;
    outcome = 'You Win';
    
  }
  /*alert(`You selected ${playerMove}. Computer selected ${computerMove}. ${outcome}
    Win:${score.Win}  Lose:${score.Lose}  Tie:${score.Tie}`);*/
   
    document.querySelector('.js-Move')
    .innerHTML = `Your Move is <img src="images/${playerMove}.jfif" class="move-icon"> - 
    <img src="images/${computerMove}.jfif" class="move-icon"> is Computer Move`;
    document.querySelector('.js-Result')
    .innerHTML = outcome;
  localStorage.setItem("score", JSON.stringify(score));
  updatescore();
}

function compMove() {
  let result = "";
  const computerMove = Math.random();
  if (computerMove < 1 / 3) {
    result = "Rock";
  } else if (computerMove < 2 / 3) {
    result = "Paper";
  } else {
    result = "Scissors";
  }
  return result;
}

function updatescore() {
   document.getElementById("result").style.display = "block";
  document.querySelector('.js-Score')
  .innerHTML=` Win:${score.Win}  Lose:${score.Lose}  Tie:${score.Tie}`;
}
function handleReset() {
  
  score.Win = 0;
  score.Lose = 0;
  score.Tie = 0;
  localStorage.removeItem("score");
  updatescore();
  document.getElementById("result").style.display = "none";
  document.querySelector('.js-Move')
  .innerHTML= `Choose your Move`;

  //alert(`Win:${score.Win}  Lose:${score.Lose}  Tie:${score.Tie}`);
  //Trying Changes
}
