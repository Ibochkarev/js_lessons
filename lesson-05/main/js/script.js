'use strict';

// Восстановить порядок в меню, добавить пятый пункт
function addItemInMenu() {
  let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    menuItemCreat = document.createElement('li');

  menu.insertBefore(menuItem[2], menuItem[1]);
  menuItemCreat.classList.add('menu-item');
  menuItemCreat.innerHTML = 'Пятый пункт';
  menu.appendChild(menuItemCreat);
}

addItemInMenu();

// Заменить картинку заднего фона на другую из папки img
function replaceBgBodyImage() {
  document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
}
replaceBgBodyImage();

// Удалить рекламу со страницы
function removeAdvOnPage() {
  let adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column')[1];
  column.removeChild(adv);
}
removeAdvOnPage();

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

function changeTitle() {
  let title = document.getElementById('title');

  title.textContent = ('Мы продаем только подлинную технику Apple');
}
changeTitle();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
function writeTextUserInPrompt() {
  let question = prompt('Как вы относитесь к технике от фирмы "Apple"?', ''),
    answer = document.getElementById('prompt');

  answer.textContent = question;
}

writeTextUserInPrompt();