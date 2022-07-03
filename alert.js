// //Example 1
// function sayHi() {
//   alert("Hi, " + nameNew);
// }
// nameNew = "Pete";
// sayHi(); // "Hi, Pete"

//Example 1
// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // "Pete" (из места создания)




  //Функции в JavaScript. 2021. Создание, вызов, работа с переменными, счетчики

  // функция это блок кода который определяется один рази может вызываться однократнео

// Function Declaration 
function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x + y);
}
//вызываем функцию внутри функции
function hello() {
    testFunction();
    console.log('Hello');
}
hello();

//Example 1
function testFunction2() {
    function t3() {
        console.log('t3 functioon');
    }
    t3();
   console.log('test function 2');
}
hello();
testFunction2();

//Practice
function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();

//Practice 2
function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
randomInt();
 function randomInt() {
    console.log('random int 555');
 }

randomInt();
randomInt();




 //Example 3
    let min = 100;
    let max = 200;
    function rand() {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
rand();

//Example 4
function countNew() {
    let count = 9;
    count++;
    console.log(count);
}
countNew();



//Example 5 + HTML+CSS3

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);
let w = 100;
function blockWidth() {
    w++;
    document.querySelector('.out-1').style.width = w + 'px';
}
