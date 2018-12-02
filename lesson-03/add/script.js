'use strict';

// У вас есть str = “урок - 3 - был слишком легким”
//делать так, чтобы строка начиналась с большой буквы

// Теперь замените все “-” на пробелы
// Вывести в консоль то, что получилось

// Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
// Вывести на экран то, что получилось

function passThroughStringMethods() {

    let str = "урок-3-был слишком легким",
        strStartCapital = str[0].toUpperCase() + str.slice(1),
        strReplace = strStartCapital.replace(/-/g, " "),
        strCutJoin = strReplace.replace("легким", "легко");

    console.log("1) " + strStartCapital);
    console.log("2) " + strReplace);
    console.log("3) " + strCutJoin);

};

passThroughStringMethods();


// У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
// Вывести в консоль квадратный корень из суммы кубов его элементов(Да, человека нужно исключить)

let arr = [20, 33, 1, 'Человек', 2, 3];

let num = 0;

arr.forEach(item => {
  if (typeof item === 'number') {
    num += Math.pow(item, 3);
  }
});

console.log(Math.sqrt(num));
document.write('<p>' + Math.sqrt(num) + '</p>');

// Создайте функцию, которая принимает 1 аргумент(название произвольное)
// Если как аргумент передана не строка - функция оповещает об этом пользователя
// В полученной(как аргумент) строке функция должна убрать все пробелы в начале и в конце
// Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки(...)

function test(arg) {
  if (typeof arg !== 'string') {
    console.log('не строка');
  }
  if (typeof arg === 'string') {
    arg = arg.trim();
    if (arg.length > 50) {
      arg = arg.substring(0, 50) + '...';
    }
    console.log(arg);
  }
}

test(
  '  22542424 545444555454545455454   7987 9879 79 79 79 797945454 5454 4545454  '
);
