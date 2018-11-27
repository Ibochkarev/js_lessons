'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
};

start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце?", ""),
        itemExpenses = prompt("Во сколько обойдется?", "");

      if ((typeof (itemOfExpenditure)) === "string" && itemOfExpenditure != null &&
        itemExpenses != null && itemOfExpenditure.length < 50 && itemOfExpenditure != "") {
        appData.expenses[itemOfExpenditure] = itemExpenses;
      } else {
        alert("Введите значение!");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка.");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка.");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка.");
    } else {
      console.log("Произошла ошибка")
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");

      appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
      alert("Доход в месяц " + appData.monthIncome + " руб.");
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let itemOfoptionalExpenses = prompt("Статья необязательных расходов?", "");

      if ((typeof (itemOfoptionalExpenses)) === "string" && itemOfoptionalExpenses != null &&
        itemOfoptionalExpenses != "" && itemOfoptionalExpenses.length < 50) {
        appData.optionalExpenses[i] = itemOfoptionalExpenses;
      } else {
        alert("Введите значение!");
        i--;
      }
    }
  },
  chooseIncome: function () {

    for (let i = 1; i < 2; i++) {
      let items = prompt('Что принесет дополнительный доход? ("Перечислите через запятую и пробел")', ''),
        items2 = prompt("Может что то еще?", "");

      if ((typeof (items)) === "string" && items != null && items != "" &&
        (typeof (items2)) === "string") {
        appData.income = items.split(', ');
        appData.income.push(items2);
      } else {
        alert("Введите значение!");
        i--;
      }
      appData.income.sort();
    }
    appData.income.forEach(function (item, i) {
      alert((i + 1) + ": " + item);
    });
  }
};

function getPropertiesOfAppData() {
  let text = console.log("Наша программа включает в себя данные: ");

  for (let key in appData) {
    console.log("Свойство: " + key + " -  имеет значение: " + appData[key]);
  }
}

getPropertiesOfAppData();