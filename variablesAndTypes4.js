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
 const myCity = {
    city:'Berlin'
};
myCity ['popular'] = true;
myCity ['country'] = 'Germny';
myCity ['age'] = '100';
// console.log(myCity);

//  Такой синтаксис используется в таком случае если название свойства является значением той или иной переменной.
// Пример

const countryPropretyName = 'country';
myCity[countryPropretyName] = 'Germany';
console.log(myCity);

// Скобочная запись отличается от точечной записи тем что в квадратных скобках я могу использовать любое выражение JavaScript.


/**
 * 14. Вложенные свойства
 */

const myCity = {
    city: 'Berlin',
    info: {
        isPopular: true,
        country: 'Germany'
    }
}
console.log(myCity.info.isPopular);

//delete myCity.info['isPopular']; 
delete myCity.info.isPopular; 
console.log(myCity);


/**
 * 15. Сокращенный формат записи свойств
 */
