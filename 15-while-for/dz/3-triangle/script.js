/*
    Домашнее задание 3
    1. Продолжим прошлое задание, и теперь ваша задача отобразить треугольник из звездочек:
    *
    * *
    * * *
    * * * *
    * * * * *

    Данную задачу, можно решить создав цикл в цикле. Измените программу.
*/

var i = 0;

while (i < 6) {
    for (var j = 0; j < i; j += 1) {
        print('*', ' ');

    }
    print();
    i += 1;
}


