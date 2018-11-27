// Получить кнопку "Начать расчет" через id
let buttonStart = document.getElementById('start');

// Получить все блоки в правой части программы через классы 
// (которые имеют класс название-value, начиная с <div class="budget-value">
// </div> и заканчивая <div class="yearsavings-value"></div>)

// Доход
let budget = document.querySelector('.budget-value');

// Бюджет на 1 день
let dayBudget = document.querySelector('.daybudget-value');

// Уровень дохода
let level = document.querySelector('.level-value');

// Обязательные расходы
let expenses = document.querySelector('.expenses-value');

// Возможные траты
let optionalExpenses = document.querySelector('.optionalexpenses-value');

// Дополнительный доход
let income = document.querySelector('.income-value');

// Накопления за 1 месяц
let monthSavings = document.querySelector('.monthsavings-value');

// Накопления за 1 год
let yearSavings = document.querySelector('.yearsavings-value');


// Получить поля(input) c обязательными расходами через класс.
// (class=”expenses-item”)
let expensesItems = document.getElementsByClassName('expenses-item');


// Получить кнопки “Утвердить” и “Рассчитать” через Tag,
// каждую в своей переменной. 
let allButtons = document.getElementsByTagName('button');

// Утвердить обязательные расходы.
let buttonExpensesConfirm = allButtons[0];

// Утвердить необязательные расходы.
let buttonOptionalExpensesConfirm = allButtons[1];

// Рассчитать дневной бюджет.
let buttonCalcDayBudget = allButtons[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item)
// при помощи querySelectorAll
let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector 
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

// Статьи возможного дохода.
let chooseIncome = document.querySelector('.choose-income');

// Есть ли накопления.
let checkSavings = document.querySelector('.checksavings').children[0];

// Сумма.
let chooseSum = document.querySelector('.choose-sum');

// Процент.
let choosePercent = document.querySelector('.choose-percent');

// Дата
let year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');


console.log(buttonStart);
console.log(budget);
console.log(dayBudget);
console.log(expenses);
console.log(optionalExpenses);
console.log(income);
console.log(monthSavings);
console.log(yearSavings);
console.log(expensesItems[0]);
console.log(expensesItems[1]);
console.log(expensesItems[2]);
console.log(expensesItems[3]);
console.log(buttonExpensesConfirm);
console.log(buttonOptionalExpensesConfirm);
console.log(buttonCalcDayBudget);
console.log(optionalExpensesItems[0]);
console.log(optionalExpensesItems[1]);
console.log(optionalExpensesItems[2]);
console.log(chooseIncome);
console.log(checkSavings);
console.log(chooseSum);
console.log(choosePercent);
console.log(year);
console.log(month);
console.log(day);