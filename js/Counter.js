function fun1(){
  let counter = document.querySelector('.p1').innerHTML;
  counter = Number(counter) + 1;
  document.querySelector('.p1').innerHTML = counter;
}
function fun2(){
   document.querySelector('.p1').innerHTML = 0;
}
function fun3(){
   let counter = document.querySelector('.p1').innerHTML;
   counter = Number(counter) - 1;
   document.querySelector('.p1').innerHTML = counter;
}