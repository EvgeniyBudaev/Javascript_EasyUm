/*
Задание 7.
Запустите пример и обратите внимание, что значение глобальной переменной from не изменилось!
*/

// для просты типов: Number, Boolean, String, undefined, NaN, null происходит копирование
function showMessage(from, text) {
    from = '**' + from + '**';          // меняем локальную переменную from
    print( from + ': ' + text );
}
  
var from = "Вася";

print(`Значение переменной from до вызова showMessage(): ${from}`);
showMessage(from, "Привет");

// старое значение from без изменений, в функции была изменена копия
print(`Значение переменной from после вызова showMessage(): ${from}`);
