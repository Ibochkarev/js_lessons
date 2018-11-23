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
  savings: true
};

function chooseExpenses() {
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
};

chooseExpenses();


function detectDayBudget() {
  appData.moneyPerDay = +(appData.budget / 30).toFixed();

  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка.");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка.");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка.");
  } else {
    console.log("Произошла ошибка")
  }
}

detectLevel();


function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
      percent = +prompt("Под какой процент?", "");

    appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
    alert("Доход в месяц " + appData.monthIncome + " руб.")
  }
}

checkSavings();

function chooseOptExpenses() {
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
}

chooseOptExpenses();