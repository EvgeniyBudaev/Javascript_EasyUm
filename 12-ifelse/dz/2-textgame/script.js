'use strict';

/*
Задание.
Возьмите за основу текстовую игру

1. Запустите игру и попробуйте поиграть
2. Добавьте еще одно условие в функции initGame, например, отредактируйте строку: 
   Введите 1 чтобы связаться с Землёй, 2 чтобы осмотреть корабль, 3 посмотреть радар.
3. Добавьте в игру обработку случая, когда выбрал 3.
   Подсказка: Надо будет добавить обработку случая в функцию handleChoice()

*/

function initGame() {
    var text = 'Вы проснулись на космическом корабле, ничего не понимаете, ваши действия?\n\n';
    text += 'Введите 1 чтобы связаться с Землёй, 2 чтобы осмотреть корабль:';
    updateOutput(text);
}

function handleChoice() {
    var choice = document.querySelector('.choice-input').value;
    
    if (choice == 1) {
        var text = 'Земля не отвечает, в эфире помехи и чья-то ругань...\n\n';
        text += 'Введите 1 чтобы подать сигнал SOS, 2 чтобы нажать большую красную кнопку на пульте: ';
        updateOutput(text);
        updateClickDoSelect(handleChoice_1);

    } else if (choice == 2) {
        var text = 'Все каюты на корабле пусты, вы один, и не умеете управлять кораблём\n\n';
        text += 'Введите 1 чтобы попробовать включить автопилот, 2 чтобы подать сигнал SOS: ';
        updateOutput(text);
        updateClickDoSelect(handleChoice_2);
    }
}

function handleChoice_1() {
    var choice = document.querySelector('.choice-input').value;

    if (choice == 1) {
        updateOutput('После долгого ожидания, ваш сигнал был услышан, и за вами послали команду спасения.');
        removeDoSelectButton();
    } else if (choice == 2) {
        updateOutput('После нажатия кнопки на Землю была сброшена кварковая бомба, вы случайно уничтожили родную планету,\n и застрелились, поняв это.');
        removeDoSelectButton();
    }
}

function handleChoice_2() {
    var choice = document.querySelector('.choice-input').value;

    if (choice == 1) {
        updateOutput('После включения автопилота, вы стартовали в неизвестном направлении, и вскоре умерли от голода,\n не обнаружив на борту ничего съестного.');
        removeDoSelectButton();
    } else if (choice == 2) {
        updateOutput('После долгого ожидания, ваш сигнал был услышан, и за вами послали команду спасения.');
        removeDoSelectButton();
    }
}

function updateOutput(text) {
    var gameTextEl = document.querySelector('.game-text');
    gameTextEl.innerHTML = '<pre>' + text + '</pre>';
}

function updateClickDoSelect(selectFunction) {
    // $ - объект jQuery, увы без него сделать подписку сложнее
    var $selectButton = $('.do-select');
    
    // удалить все функции, подписанные на событие 'click'
    $selectButton.off('click');
    // заново подпишем функцию
    $selectButton.click(selectFunction);
    // очистим поле ввода при клике на кнопку
    $selectButton.click(function() {
        $('.choice-input').val('');
    });
}

function removeDoSelectButton() {
    document.querySelector('.do-select').remove();
}

function documentReady() {
    initGame();
    updateClickDoSelect(handleChoice);
}

document.addEventListener('DOMContentLoaded', documentReady);