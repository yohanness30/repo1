const display = document.querySelector('.div1b1')
const stopBtn = document.querySelector('.b1'); 
const resetBtn = document.querySelector('.b2'); 
const startBtn = document.querySelector('.b3'); 

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let ms = 0;
let min = 0;
let sec = 0;
let interval;

startBtn.addEventListener('click', function(){
  if(paused){
    paused = false;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 75)
  }
});
resetBtn.addEventListener('click', function(){
  paused = true;
  clearInterval(interval);
  ms = 0;
  min = 0;
  sec = 0;
  startTime = 0;
  currentTime = 0;
  elapsedTime = 0;
  display.textContent = `00:00:00`;
});
stopBtn.addEventListener('click', function(){
  if(paused === false){
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(interval);
  }
});

function updateTime(){
  elapsedTime = Date.now() - startTime;

  ms = Math.floor(elapsedTime % 1000 / 10);
  sec = Math.floor((elapsedTime / 1000) % 60);
  min = Math.floor(elapsedTime / (1000 * 60 ) % 60);
 
 ms = String(ms).padStart(2, '0');
 sec = String(sec).padStart(2, '0');
 min = String(min).padStart(2, '0');
  // if (ms < 10) {
  //   ms = '0' + ms;
  // }
  // if (sec < 10) {
  //   sec = '0' + sec;
  // }
  // if (min < 10) {
  //   min = '0' + min;
  // }
 
  display.textContent = `${min}:${sec}:${ms}`;
}
