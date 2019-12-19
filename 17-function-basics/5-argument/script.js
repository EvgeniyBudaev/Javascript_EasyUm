/*
Задание 11.5
1. Вызовите функцию circle_area() с другим значением аргумента
2. Напишите функцию вычисляющую площадь квадрата square_area()

*/
function circle_area(radius) {  // radius - переменная параметр
    var pi = 3.14159265359;
    var area = ((pi * radius) * radius);
    print(`Площадь круга с радиусом ${radius} равна: ${area}`);
}

circle_area(2); // 2 - аргумент функции

function square_area(side_len) {
    return side_len * side_len;
}

var sqArea = square_area(4);
print(sqArea);

