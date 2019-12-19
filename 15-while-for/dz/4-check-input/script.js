/*
Задание
1. Добавьте код для генерации прямоугольника на основании ввода пользователя
*/

var cont, height, width;
print("Программа рисует прямоугольник из звездочек. Введите параметры прямоугольника.");
width = 1;
height = 1;

while (width > 0 || height > 0) {
    width = Number.parseInt(prompt("Введите ширину: ", ''));
    height = Number.parseInt(prompt("Введите высоту: ", ''));

    print(`Вы ввели следующие параметры прямоугольника: ${width}x${height}`);
    var stars = '';

    // дописать код тут
    var i = 0;
    while (i < width) {
        for (var j = 0; j < height; j += 1) {
            print('*', ' ');
        }
        print();
        i += 1;
    }

    cont = prompt("Выйти? Y/N", 'y');
    if (((cont === "Y") || (cont === "y"))) {
        break;
    } else if (((cont === "N") || (cont === "n"))) {
        continue;
    } else {
        print("Не понял? Тогда рисуем снова.");
    }
}

print("Увидимся в следующий раз!"); 


document.addEventListener("DOMContentLoaded", main);