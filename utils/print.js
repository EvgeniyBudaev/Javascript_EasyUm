'use strict'

/**
 * Функция выводит текст на странице в теге <pre>
 * @param {string} text выводимое ссобщение в теге pre
 * @param {string} end символ завершения строки. По умолчанию \n
 */
function print(text, end) {
    text = text || '';
    end = end || '\n';
    var output = document.getElementById('output');
    if (!output) {
        document.addEventListener('DOMContentLoaded', print.bind(null, text, end));
    } else {
        output.innerText += text + end;
    }
}

function arrayToStr(arr, isNotLastArray) {
    result = '[';
    
    arr.forEach(function(item, index) {
        var end = index == arr.length-1 ? '' : ', ';
        if (item instanceof Array) {
            result += arrayToStr(item) + end;
        } else {
            result += item.toString() + end;
        }
    });

    return result + ']';
}

function objToStr(obj) {
    var result = '{'

    Object.keys(obj).forEach(function (key, index, keysArr) {
        var end = index == keysArr.length-1 ? ' ' : ',';
        if (obj[key] instanceof Object) {
            result += ` ${key}: ${objToStr(obj[key])}${end}`;
        } else {
            result += ` ${key}: ${obj[key]}${end}`;
        }
    });

    return result + '}';
}

function printArray(arr) {
    print(arrayToStr(arr));
}

document.addEventListener("DOMContentLoaded", function() {
    var container = document.createElement("div");
    container.innerHTML = '<h3>Результат работы программы: </h3><pre id="output" style="border: 1px solid #eee"></pre>';
    document.body.appendChild(container);
});