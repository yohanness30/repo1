function fun1(){
  const v1 = document.querySelector('.input1').value;
  const v2 = document.querySelector('.input2').value;
  document.querySelector('.p1')
    .innerHTML = 'Hypotenuse: ' + Math.sqrt(Math.pow(v1, 2) + Math.pow(v2, 2));
}
