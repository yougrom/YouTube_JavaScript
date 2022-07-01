/**
 * 
 * 21 - Что такое функция
 * Функция это блок кода, который можно выполнять многократно
 */

let a = 5
let b = 3
function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b) // 8

a = 8
b = 12

sum(a, b) // 20

// Функция позволяет действие с разными вводными значениями, многократно.
/**
 * Функция может быть...
 * ... именнованной
 * ... присвоена переменной
 * ... анонимной 
 * ... аргументом при вызове другой функции
 * ... згначением свойства (метода) объекта
 * 
 * Функция это объект
 * 
 */



/**
 * 
 * 22. Объявление и вызов функции
 * 
 * функция возвращает UNDDEFINED если нет инструкции RETURN 
 */


// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.dir(myFn)


//Вызов функции


function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
myFn(10, 3); // 14

// (10, 3) — Аргументы - это те значения что я передаю в вызове функцииб аргкмент функции это вызов функции
// (a, b) - Параметры это названия переменных при объявлении переменных, если пораметры функции то это объявление функции
// аргументы меняюся каждый раз при вызове функции, Параметры не меняются


/**
 * 
 * 23. Передача значения по ссылке
 */

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age); // 22

//Внутри функции не рекомендуется мутировать внешние объекты


//Создание копии объекта

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const upgradePerson = Object.assign({}, person)
    upgradePerson.age += 1
    return upgradePerson
}

const upgradePerson = increasePersonAge(personOne)
console.log(personOne.age); //21
console.log(updatedPersonOne.age); // 22


// 24. Колбэк функции - это функции которые выполняются внутри других функций
function anotherFunction() {
    //Действие
}
function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)


//Пример
function printMyName() {
    console.log('Bogdan');
}
console.log('Start');
setTimeout(printMyName, 2000)

/**
 * 25. Правила работы с функциями
 * 1. Называть функции исходя из выполнения задач
 * 2. Одна функция должна выполнять одну задачу
 * 3ю Не рекомендуется изменять внешние относительно функции переменные
 */
