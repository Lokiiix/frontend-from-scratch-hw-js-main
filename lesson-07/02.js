/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    return /^[+-]?(?:\d+\.\d+|\.\d+|\d+)(?:[eE][+-]?\d+)?$/.test(str);
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.e3")) // Ожидаемый результат: true
// console.log(isNumeric('1.23e4')) // Ожидаемый результат: true
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
