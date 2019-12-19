'use strict';

/*
Задание 1
Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
*/
function min(a,b){
    var minValue = Number.MAX_VALUE;
    if(a < minValue && a < b){
        minValue = a;
    } else {
        minValue = b;
    }
    return minValue;

}

assert(min(2, 5)  == 2,  'Функция min(2, 5) должна вернуть 2');
assert(min(3, -1) == -1, 'Функция min(3, -1) должна вернуть -1');
assert(min(1, 1)  == 1,  'Функция min(1, 1) должна вернуть 1');