const playerMove = document.querySelector('.player-move');
const computerMove = document.querySelector('.computer-move');
const result = document.querySelector('.result');

const buttonOne = document.querySelector('.b1');
const buttonTwo = document.querySelector('.b2');
const buttonThree = document.querySelector('.b3');

let b1 = 'Rock';
let b2 = 'Paper';
let b3 = 'Scissors';

buttonOne.addEventListener('click', function(){
  playerMove.innerHTML =`You Pick: ${b1}`;
  fun2();
  fun3()
});
buttonTwo.addEventListener('click', function(){
  playerMove.innerHTML = `You Pick: ${b2}`;
  fun2();
  fun3();
});
buttonThree.addEventListener('click', function(){
  playerMove.innerHTML = `You Pick: ${b3}`;
  fun2(); 
  fun3();
});

function fun2(){
  const cMove = Math.random();
 
  if(cMove > 0 && cMove <= 1/3){
    computerMove.innerHTML = `Computer Pick: ${b1}`;
  } else if(cMove > 1/3 && cMove <= 2/3){
    computerMove.innerHTML = `Computer Pick: ${b2}`;
  } else if(cMove > 2/3 && cMove < 1) {
    computerMove.innerHTML = `Computer Pick: ${b3}`;
  }
}
function fun3(){
  let playerChoice = playerMove.innerHTML.split(': ')[1]; // Extract player's choice
  let computerChoice = computerMove.innerHTML.split(': ')[1]; // Extract computer's choice
  
  if(playerChoice === b1){
    if(computerChoice === b1){
      result.innerHTML = 'Ties!';
    } else if(computerChoice === b2){
      result.innerHTML = 'You Lose!';
    } else if(computerChoice === b3){
      result.innerHTML = 'You Win!';
    }
  } else if(playerChoice === b2){
    if(computerChoice === b1){
      result.innerHTML = 'You Win!';
    } else if(computerChoice === b2){
      result.innerHTML = 'Ties!';
    } else if(computerChoice === b3){
      result.innerHTML = 'You Lose!';
    }  
  } else if(playerChoice === b3){
    if(computerChoice === b1){
      result.innerHTML = 'You Lose!';
    } else if(computerChoice === b2){
      result.innerHTML = 'You Win!';
    } else if(computerChoice === b3){
      result.innerHTML = 'Ties!';
    }
  }
}






