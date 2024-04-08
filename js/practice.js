const arrayName = ['yohannes', 'Amen', 'Mike', 'Jorj', 'Seph'];
const number = [2, 4, 3, 6, 5, 8, 7, 1, 9];

for(let i = 0; i < arrayName.length; i++){
  console.log(arrayName[i]);
}

arrayName.forEach(function(value){
  console.log(value);
})
arrayName.map(function(value){
  console.log(value * 2);
})
arrayName.splice(0, 1, 'John');
console.log(arrayName);
arrayName.unshift('yohannes'); //add element infront of an array
arrayName.shift('yohannes'); //remove element infront of an array
console.log(arrayName);
console.log(arrayName.lastIndexOf('John'));
arrayName.pop();
console.log(arrayName);
console.log(arrayName.reverse());
console.log(arrayName.length);
console.log(arrayName.sort());
console.log(number.sort());
console.log(Array.isArray(number));
console.log(number.slice(2, 5))
class info {
  name = 'yohannes';
  myAge() {
    console.log('I am 22 years old')
  }
};
const info1 = new info(); //these are objects
const info2 = new info();
const info3 = new info();

console.log(info1.name);
info1.myAge();
console.log(info2.name);
info1.myAge();
console.log(info3.name);
info1.myAge();

class data {
  constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  fun(){
    console.log(`${this.name} scores ${this.grade}`)
  }
}
const data1 = new data('Yohannes', 22, 2.5);
console.log(data1.name);
console.log(data1.age);
console.log(data1.grade);
data1.fun();

const data2 = new data('Dawit', 20, 3.0);
console.log(data2.name);
console.log(data2.age);
console.log(data2.grade);
data2.fun();

const data3 = new data('Masresha', 22, 2.9);
console.log(data3.name);
console.log(data3.age);
console.log(data3.grade);
data3.fun();

class Dog {
  alive = true;
  fly = false;
}
class Cat extends Dog {}
const cat1 = new Cat();
console.log(cat1.alive);
console.log(cat1.fly);

//passing object to the function as anrgument
class car {
  constructor(model, color, year){
    this.model = model;
    this.color = color;
    this.year = year;
  }
}
const car1 = new car('tesla', 'red', 2001);

console.time('time');
fun2(car1);
console.timeEnd('time')
function fun2(car2){
  console.log(car2.model);
  console.log(car2.color);
  console.log(car2.year);
}
//setTimeout() & setInterval()
setTimeout(function(){
  alert(`thia is setTimeout methode`)
}, 10000);
let total = 0;
setInterval(function(){
  total = total + 1;
  console.log(total);
}, 1000)
//date object
let date = new Date();
date = date.toLocaleString();
console.log(date);

//promise
let p = new Promise(function(resolve, reject){
  let a = 1 + 2;
  if(a === 2){
    resolve('Correct!')
  } else{
    reject('Failed')
  }
})
p.then(function(massage){
  console.log('You are ' + massage)
}).catch(function(massage){
  console.log('You ' + massage)
})

//async
async function fun1(){
  let a = 1 + 1;
  if(a === 2){
    return 'Correct!';
  } else{
    throw 'Failed';
  }
}

fun1().then(function(massage){
  console.log('You are ' + massage)
}).catch(function(massage){
  console.log('You ' + massage)
})

//await
async function fun2(){
  let a = 1 + 1;
  if(a === 2){
    return 'Correct!';
  } else{
    throw 'Failed';
  }
}
async function fun3(){
  try{
    let massage = await fun2();
    console.log('You are ' + massage);
  }
  catch(error){
    console.log('You ' + error);
  }
}
fun3();
const v1 = document.querySelector('.name');

  setInterval(function (){
    if(v1.innerHTML === 'Yohannes'){
      document.querySelector('.name').innerHTML = 'Zeleke';
      document.querySelector('.name').style.color = 'orange';
      
    } else if(v1.innerHTML === 'Zeleke'){
      document.querySelector('.name').innerHTML = 'Tibebu'
      document.querySelector('.name').style.color = 'red';
     
    } else{
      document.querySelector('.name').innerHTML = 'Yohannes';
      document.querySelector('.name').style.color = 'green';
    }
  } , 2000);

