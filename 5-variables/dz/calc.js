/*

1. Предложить пользователю ввести чесло при помощи +prompt() и сохранить в переменную num1 
2. Предложить пользователю ввести чесло при помощи +prompt() и сохранить в переменную num2
3. Выполнить операции с числами, которые хранятся в num1 и num2: +, /, *
4. Отобразить пользователю результат арифметических операций операций

var num = +prompt("Введите число");

alert(num);
*/

var num1 = +prompt("Enter num1:");
var num2 = +prompt("Enter num2:");
var op   = prompt("Enter op:");

var result = '';

if (op == '+') {
    result = num1 + '+' + num2 + '=' + (num1 + num2); 
}

//result = result + num1 + '+' + num2 + '=' + (num1 + num2); 
//result = result + num1 + '*' + num2 + '=' + (num1 * num2); 

alert(result);