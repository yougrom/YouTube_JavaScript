// 6 - Переменные
// Переменные дают возможность доступа к значениям
// Чтобы обратится к какому-либо значению позже я должен присвоить значение переменной.
// Переменные дают возможность повторного доступа к значениям

// Имена Переменных
// 1 - PascalCase используют для Типов и Классов JS
// 2 - DB_PASSWORD используют когда Значения известны до запуска приложения и не меняются те CONSTANTA
// 3 - camelCase все остальные переменные Основной вариант
// Названия переменных должны быть понятными


// 7 - Объявление переменных

// let
// const
// var - не рекомендуется использовать эту переменную но надо о ней знать

let a // let - ключевое слово которое объявляет переменную
const c = 10 // объявление и присваивание 
a = true // присваивание переменной значение

// let
let a = 10
a = 20
let b
b = false
//undefined - это специальный тип который говорит что у переменной нет значения 

// const
const c = 10
c = 20 //TypeError: Assignment to consistant variable.

let myName
console.log(myName);
myName = 'Yuriy';
console.log(myName);

// Объявление и присваивание
let testTest
console.log(testTest);
testTest = true
console.log(testTest);



// 8 Практика по объявлению переменных
let myName
console.log(myName);

myName = 'Yuriy'
console.log(myName);



//9. Примитивные типы

/** JS - Динамически типезируемый язык
 * 
 * Пример Динамической типизаци
 */

let a = 10
a = true
a = 'Yuriy'
a = undefined

// Пример 2

function a() {
    console.log('Hey There');
}
a() // 

/** CONST для объявления переменных
 * Стрелочная функция
 * */ 
const a = () => {
    console.log('Hey There');
}
a()//Hey There

