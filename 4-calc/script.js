/*

Обработать клики по кнопкам с цифрами
  - выбрать элементы с кнопками
  - добавить обработчик по клику: addEventListener
    - в поле ввода введем цифру, по которой кликнул пользователь

При клике по кнопке "Посчитать" взять выражение из поля ввода 
и отобразить результат. (для простоты eval() + alert())

*/

function onCalcBtnClick(event) {
    //console.log(event.target.innerText);
    var inputExp = document.querySelector('.input-group .form-control');
    inputExp.value = inputExp.value + event.target.innerText;
}

function OnCalcExpr(event) {
    var inputExp = document.querySelector('.input-group .form-control');
    var result = eval(inputExp.value);
    inputExp.value = result;
}

function documentReady() {
    // TODO: написать код
    var allCalButtons = document.getElementsByClassName('calculator__button');
    for (var i = 0; i < allCalButtons.length; ++i) {
        allCalButtons[i].addEventListener('click', onCalcBtnClick)
    }
    var btnAdd = document.getElementById('button-addon2');
    btnAdd.addEventListener('click', OnCalcExpr);
}


document.addEventListener('DOMContentLoaded', documentReady);