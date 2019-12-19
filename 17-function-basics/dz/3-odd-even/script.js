'use strict';

/*
Задание 3
Возьмите за основу Домашнее задание, где по запросу пользователя расчитывались
четные и нечетные числа в заданном диапазоне.
Напишите функцию generate_odd_even() которая возвращает строку с четными или не четными значениями.
*/

/**
 * Функция возвращает четные или не четные числа в диапазоне
 * @param {Number} start начало диапазона
 * @param {Number} end конец диапазона
 * @param {Boolean} isEven true - четное или false - не четное
 */
function generate_odd_even(start, end, isEven) {
    var result = ", ";
    if (!isNaN(start) && !isNaN(end)) {
        if(isEven == false){
            start = Math.ceil(start);
            if (start % 2 == 0) {
                ++start;
            };
            for (var i = start; i <= end; i += 2) {
                //document.write(i + '<br/>');
                return i + result;
            };
        }
        else if(isEven == true){
            start = Math.ceil(start);
            if (start % 2 == 0) {
                start;
            };
            for (var j = start; j <= end; j += 2) {
                //document.write(j + '<br/>');
                return j + result;
            };
        }
    }
    else {
        alert('Некорректный ввод');
    };

}

assert(generate_odd_even(10, 20, false) == '11, 13, 15, 17, 19', 'Значения не совпадают!');
assert(generate_odd_even(10, 20, true) == '10, 12, 14, 16, 18, 20', 'Значения не совпадают!');