'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
  budget: money,
  timeData: time,
  expenses: {
    requiredExp1: "",
    requiredExp2: "",
    requiredExp3: "",
    requiredExp4: ""
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

appData.expenses.requiredExp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.requiredExp2 = prompt("Во сколько обойдется?", "");
appData.expenses.requiredExp3 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.requiredExp4 = prompt("Во сколько обойдется?", "");

alert(appData.budget / 30);
console.log(appData);