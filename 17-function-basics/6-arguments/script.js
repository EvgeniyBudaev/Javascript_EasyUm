/*
Задание 11.6
1. Запустите и посмотрите результат работы функции perimeter()
2. На основе примера с функцией perimeter, допишите функцию area() для нахождения площади прямоугольника
3. Протестируйте функцию area() передав в нее разные значения
*/

function perimeter(a, b) {
    var result = 2 * (a + b);
    print(`Периметр прямоугольника равен: ${result}`);
}
perimeter(1, 2);


function area(a, b) {
    return a * b;
}

var rectArea = area(3, 2);
print("RectArea: ", rectArea);