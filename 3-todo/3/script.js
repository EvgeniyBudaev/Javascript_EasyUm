'use strict';

/*
1. Пользователь вводит текст задания в поле ввода и кликает по добавить
2. Обрабатываем клик по кнопке Добавить
   2.1. Получим текст из поля ввода
   2.2. Добавим текст todo в список (массив) дел
   2.2.1 Если пользователь не ввел текст, то игнорируем.
   2.3 Очистить поле ввода
3. В цикле берем каждый элемент из списка дел (текст)
   3.1 Взять список из разметки ul
   3.2 Добавить в этот список текст дела
*/

var todos = [];

 function onAddButton() {
    var todoInput = document.querySelector('.todo-input');
    // TODO: переделать с учетом списка
    if (todoInput.value) {
        todos.push(todoInput.value);
    }

    var todoUl = document.querySelector('.todo-list');
    var li = document.createElement('li');
    li.innerText = todoInput.value;
    li.classList.add('list-group-item');

    var removeButton = document.createElement('button');
    removeButton.addEventListener('click', onRemoveBtn);
     removeButton.classList.add('btn', 'btn-danger', 'remove-todo-button');
     removeButton.innerHTML = "Удалить";
    li.append(removeButton);

    todoUl.append(li);

    todoInput.value = "";
 }

 function onRemoveBtn(event){
     event.target.parentElement.remove();
 }

function documentReady() {
    var addTodoButton = document.querySelector('.add-todo-button');
    addTodoButton.addEventListener('click', onAddButton);

}

document.addEventListener('DOMContentLoaded', documentReady);