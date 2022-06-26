/**Раздел 4: Объекты
 * 12. Объекты
 * 
 * Объект это набор свойста {
 * «Имя: значение»
 * }
 * Объект это ссылочный тип и переменная которой мы присваиваем объект содержит ссылку на объект который находится в другом месте памяти
 */
// const myCity = {
//     city:'Berlin',
//     // popular: true,
//     // country: 'Germany'
// }
// console.log(myCity.city);
// console.log(myCity.popular);
// console.log(typeof myCity.popular);

/**
 * 13. Создание и удаление свойств объектов
 */
    // myCity.popular = false;
    // myCity.city = 'Kyiv';
    // myCity.city = 'Ukraine';
    // console.log(myCity);

/**
 * Пример — Удаление свойств.
 *  */    

// delete myCity.popular;
// console.log(myCity);

/**
 * Доступ к значению c использованием скобок
 */
//  const myCity = {
//     city:'Berlin'
// };
// myCity ['popular'] = true;
// myCity ['country'] = 'Germny';
// myCity ['age'] = '100';
// console.log(myCity);

//  Такой синтаксис используется в таком случае если название свойства является значением той или иной переменной.
// Пример

// const countryPropretyName = 'country';
// myCity[countryPropretyName] = 'Germany';
// console.log(myCity);

// Скобочная запись отличается от точечной записи тем что в квадратных скобках я могу использовать любое выражение JavaScript.


/**
 * 14. Вложенные свойства
 */

// const myCity = {
//     city: 'Berlin',
//     info: {
//         isPopular: true,
//         country: 'Germany'
//     }
// }
// console.log(myCity.info.isPopular);

// //delete myCity.info['isPopular']; 
// delete myCity.info.isPopular; 
// console.log(myCity);


/**
 * 15. Сокращенный формат записи свойств
 */
// Использование переменных
// const name = 'Yuriy';
// const postQty = 23;

// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false
// };
//  Сокращенный формат записи свойств
const name = 'Yuriy';
const postQty = 23;

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
};
console.log(userProfile);

/**
 * 16. Глобальные объекты
 */
window // Комманда - объект для Веб браузера
global // Глобальные объекты в Node.js
//унифицированный глобальный объект для Браузера и Node.js
console.log('Hello');
window.console.log('Hello'); // Веб браузер
global.console.log(Hello); // Node.js


/**
 * 17. Методы объекта
 * 
 * Метод - свойство объекта, значение которого - функция
 * 
 */

//Option 1 
// const myCity = {
// city: 'Berlin',
//     cityGreeting: function (){
//         console.log('Greetings!!');
//     }
// }
// myCity.cityGreeting()

// Option 2
const myCity = {
    city: 'Berlin',
        cityGreeting (){
            console.log('Greetings!!');
        }
    }
    myCity.cityGreeting()

    // Методы и свойства объектов
    // Свойства объектов не содержат функции, а методы содержат функции как значения.
    myCity.city // Доступ к значению свойств
    myCity.cityGreeting() // Вызов метода

    