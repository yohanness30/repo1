function fun1(){
  const value1 = document.querySelector('.input1').value;
  console.log(value1);
  const radioButton1 = document.querySelector('.radio1');
  const radioButton2 = document.querySelector('.radio2');

  if(radioButton1.checked){
    console.log('Celsius: ' + 5/9 * (value1 - 32));
    document.querySelector('.p1').innerHTML = 'Celsius: ' + 5/9 * (value1 - 32);
    document.querySelector('.input1').value = '';
  } else if(radioButton2.checked){
    console.log('Farenheit: ' + (value1 * 9/5 + 32));
    document.querySelector('.p1').innerHTML = 'Farenheit: ' + (value1 * 9/5 + 32);
    document.querySelector('.input1').value = '';
  } else {
    document.querySelector('.p1').innerHTML = 'Select a Unit Please!'
  }
}