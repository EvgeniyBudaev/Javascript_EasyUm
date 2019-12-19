/*
Задание

Программа Гороскоп

Гадалка Пифия давно написала программу для помощи в ее работе, но сейчас у нее нет времени улучшить программу
и она обратилась к вам за помощью, чтобы вы добавили новые предсказания на 2019 год.
Придумайте предсказания и добавьте в программу "Гороскоп"

1. Измените randInt(1, 5) на большее количество случайныйх ответов. Сейчас их от 1 до 8,
   Например, вместо 8 сделайте 9
2. Исправьте 9 предсказание, вместо текста "ИЗМЕНИТЕ НА НОВОЕ ПРЕДСКАЗАНИЕ" добавьте свое
3. Добавьте больше предсказаний или можете вообще заменить все предсказания на свои

*/

function yourDestiny() {
    var guessAnswer = randInt(1, 5);
    var answer = '';

    if (guessAnswer == 1) {
        answer = 'Пифия советует вам прокачаться до JavaScript-разработчика и стать крутым специалистом';
    } else if (guessAnswer == 2) {
        answer = 'Пифия пока не рекомендует вам инвестировать в биткойны';
    } else if (guessAnswer == 3) {
        answer = 'Пифия считает, что вас ждет сюрприз. Чтобы узнать какой, отправьте короткое SMS на номер 1234';
    } else if (guessAnswer == 4) {
        answer = 'Сегодня боги не ответили Пифии — попробуйте завтра.';
    } else if (guessAnswer == 5) {
        answer = 'Пифия говорит, что вы останетесь живы, но советует смотреть под ноги';
    } else if (guessAnswer == 6) {
        answer = 'ИЗМЕНИТЕ НА НОВОЕ ПРЕДСКАЗАНИЕ';
    }

    return answer;
}

// обрабатываем случай нажатия на кнопку. Выводим текст в textarea
function showAnswer() {
    var answerTextarea = document.querySelector('.answer');
    answerTextarea.textContent = yourDestiny();
}

function documentReady() {
    var destinyButton = document.querySelector('.destiny');
    destinyButton.addEventListener('click', showAnswer);
}

// Подписывается на событие, когда документ полностю загружен и готов к работе
document.addEventListener('DOMContentLoaded', documentReady);


