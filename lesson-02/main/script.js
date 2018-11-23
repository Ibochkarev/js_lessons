'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// Var 01
// for (let i = 0; i < 2; i++) {
//   let a1 = prompt("Введите обязательную статью расходов в этом месяце?", ""),
//     a2 = prompt("Во сколько обойдется?", "");

//   if ((typeof (a1)) === "string" && a1 != null &&
//     a2 != null && a1.length < 50 && a1 != "") {
//     appData.expenses[a1] = a2;
//   } else {
//     alert("Введите значение!");
//     i--;
//   }
// }

// Var 02
let i = 0;
while (i < 2) {
  let a1 = prompt("Введите обязательную статью расходов в этом месяце?", ""),
    a2 = prompt("Во сколько обойдется?", "");

  if ((typeof (a1)) === "string" && a1 != null &&
    a2 != null && a1.length < 50 && a1 != "") {
    appData.expenses[a1] = a2;
  } else {
    alert("Введите значение!");
    i--;
  }

  i++;
}

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка.");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка.");
} else {
  console.log("Произошла ошибка")
}