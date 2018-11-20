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

alert(appData.budget / 30);
console.log(appData.expenses);