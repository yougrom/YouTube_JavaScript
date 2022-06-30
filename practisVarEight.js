// 8 Практика по объявлению переменных
const myName = 'Yuriy'
console.log(myName);
// ОШИБКА - Missing initializer in const declaration - нельзя объявить переменную с помощью const не пресвоив ей значение


// 9. Примитивные типы — тип переменной определяется типом присвоенного значения
const a = 10 //значение типа число
const b = 'abc' // значение типа строка

// ТИПЫ
// Приметивные типы и Ссылочный тип
// переменная => имеет значение => значение имеет ТИП

// Приметивные типы
// string — "" строка
// boolean - логический — 2 значения true/false
// number — число
// null — есть только одно значение null — используем тогда когда хотим показать чо значение отсутствует
// undefined — значение не определено
// symbol — 


// 10. Ссылочный тип это объект, называется ссылочным так как при присваивании такого объекта переменной, переменная не хранит сам объект, переменная хнанит ссылку на объект
// object — это набор свойств и каждое свойство состоит из названия и значения свойства
// Значение приметыивных типов хранятся в переменных
// const objectA {
//     a: 10,
//     b: true
// }
// const copyOfA = objectA
// copyOfA.a = 20 // objectA => 20
// const objectA {
//     a: 20,
//     b: true
// }
// //как добавлять новые свойства к уже существующему объекту
// const objectA {
//     a: 10,
//     b: true
// }


// const objectA {
//     a: 10,
//     b: true,
//     c: 'abc'
// }
// const copyOfA = objectA
// objectA.c = 'abc'
// console.log(objectA);

//Доступ к свойтвам того или иного объекта возможно с помощью оператора точка .

// 11. Динамическая типизация
// JS - динамически типизируемый язык

function a() {
    console.log('Hey there');
}
a() // 'Hey there'
a = 10
a() // Uncaught TypeError: a is not a function

// Стрелочная функция
const a = () => {
    console.log('Hey there')
}
a() // "Hey there"
a = 10 // TypeError: Assigment to constant variable
a()    


//My Example
const gromovStaff = {
    mouse: 1,
    watch: 2,
    macbook: 3
};
gromovStaff.mouse = 10;

const copyOfGromovStaff = gromovStaff;

copyOfGromovStaff.iphone = 4;
copyOfGromovStaff.watch = 10;
//конструкция - деструкторизация объект
const {mouse, watch, macbook, iphone} = copyOfGromovStaff;
console.log(mouse + watch + macbook + iphone);


//11. Динамическая типизация
