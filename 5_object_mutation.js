/**
 * 
19. Мутация в JavaScript
 * 
 */
//копирование значений приметивных типов
const a = 10;
let b = a;
b = 30;
console.log(a);// 10
console.log(b);// 30

//копирование значения ссылочного типа
// const person = {
//     name:'Yuriy',
//     age: 35
// }

// person.age = 36
// person.isAdult = true

// console.log(person.age);//36
// console.log(person.isAdult); //true

//Мутирование копий

// const person = {
//     name:'Yuriy',
//     age: 35
// }
// const person2 = person

// person2.age = 36
// person2.isAdult = true

// console.log(person.age);//36
// console.log(person.isAdult); //true



// //Как избежать мутаций
// const person = {
//     name:'Yuriy',
//     age: 25
// }
// const person2 = Object.assign({}, person)
// person2.age = 26

// console.log(person2.age);//26
// console.log(person.age); // 25

// Object является и типом и классом поэтому пишем с большой буквы
//С помощью метода assign можно создавать новые объекты


//Как избежать мутаций 2
// const person = {
//     name:'Yuriy',
//     age: 25
// }
// const person2 = { ...person }
// person2.name = 'Alice'

// console.log(person2.name); // Alice
// console.log(person.name); // Bob


//Как избежать мутаций 3
const person = {
    name:'Yuriy',
    age: 25
}
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Alice';

console.log(person2.name); // Alice
console.log(person.name); // Bob