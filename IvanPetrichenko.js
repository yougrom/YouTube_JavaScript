/**
 * Функции Ивана Петриченка
 */
//как ведут себя переменные внутри функции
'use strict';

let num = 20;//переменная создана глобально
function showFirstMessage(text) { // имя это глагол + то над чем выполняем действие
    console.log(text);
    let num = 10; //локальная переменная
}
showFirstMessage('Hello World');
console.log(num);

function someText (a, b, c) {
    const aName = 'Yuriy';
    const bSurname = 'Gromov';
    const cSomeName = 'Yurijovich';
    console.log(aName + ' ' + bSurname +' ' + cSomeName); 
}
someText();




//замыкание функции это сама функция вместе со всеми внешними переменными которые ей доступны

// function calc(a, b) {
//     return (a + b)
// } 
// console.log(calc(4, 5));
// console.log(calc(10, 15));
// console.log(calc(45, 53));


// function newCalc (a, b, c) {
//     return (a + (b / c));
// }
// console.log(newCalc(10, 20, 2));




//Example 1
function ret() {
    let num = 50;

    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//Example 2
function abc() {

    const abcNew = 50;
    return abcNew;
}
const $abcNew = abc();
console.log($abcNew);





/**
 * Exemple
 */
const whatIsMyName = (x, y, t, r) => {
    console.log(x, y, t, r);
    
}
//const myName = 'Yuriy';
whatIsMyName(12, {y:1}, [1, 2, 3], 'xyz');



// const testTest = function() {

// };

/**
 * 123. ЗАДАЧА 7 - Объявление и вызов функции

 */

const myNameIs = function() {
    const myName = 'Yuriy';
    console.log(myName);
} 
myNameIs();
// Example 2
function printMyName() {
    const thisIsMyName = 'Yuriy';
    console.log(thisIsMyName);
}
printMyName();

/**
 * 125. ЗАДАЧА 8 - Присваивание функции переменной
 */



// Function Declaration - Создается до начала выполнения скрипта, можно вызвать перед объявлением.
const logger = function() {
    console.log('hello');
};
// Function Expression - Создается только тогда. когда доходит поток кода, можно вызвать только после объявления.
const loggerExp = function() {
    console.log('hello');
};
loggerExp();
// Стрелочные функции
const calc = (a, b) => {
    console.log('1');    
    return a + b;
};

//Mediun example - https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
let a = 3
function addTwo(x) {
   let ret = x + 2
   return ret
 }
 let b = addTwo(a)
 console.log(b);


 // Learn Java exaample https://learn.javascript.ru/closure
// sayHi

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi(); 



function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let nameNew = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();