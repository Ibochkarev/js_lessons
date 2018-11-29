// Получить кнопку "Начать расчет" через id
let buttonStart = document.getElementById('start');

// Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с <div class="budget-value">
// </div> и заканчивая <div class="yearsavings-value"></div>)

// Доход
let budgetValue = document.getElementsByClassName('budget-value')[0];
// Бюджет на 1 день
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];

// Уровень дохода
let levelValue = document.getElementsByClassName('level-value')[0];

// Обязательные расходы
let expensesValue = document.getElementsByClassName('expenses-value')[0];

// Возможные траты
let optionalExpensesValue = document.getElementsByClassName(
  'optionalexpenses-value'
)[0];

// Дополнительный доход
let incomeValue = document.getElementsByClassName('income-value')[0];

// Накопления за 1 месяц
let monthSavingsValue = document.getElementsByClassName(
  'monthsavings-value'
)[0];

// Накопления за 1 год
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// Получить поля(input) c обязательными расходами через класс.
// (class=”expenses-item”)
let expensesItem = document.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag,
// каждую в своей переменной.
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item)
// при помощи querySelectorAll
let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

// Статьи возможного дохода.
let chooseIncome = document.querySelector('.choose-income');

// Есть ли накопления.
let checkSavings = document.querySelector('#savings');

// Сумма.
let sumValue = document.querySelector('.choose-sum');

// Процент.
let percentValue = document.querySelector('.choose-percent');

// Дата
let year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');

let money,
  time,
  expensesSum = 0;

countBtn.disabled = true;

buttonStart.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();

  if (appData.budget != undefined) {
    countBtn.disabled = false;
  } else {
    countBtn.disabled = true;
  }
});

expensesBtn.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      alert('Введите значение!');
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let opt = optionalExpensesItems[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.budgetDay = (appData.budget - expensesValue.textContent) / 30;

    dayBudgetValue.textContent = appData.budgetDay.toFixed();

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка.';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка.';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка.';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка!';
  }
});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

optionalExpensesItems.forEach(item => {
  item.addEventListener('input', () => {
    if (item.value.length >= 1 && item.value.length >= 1) {
      optionalExpensesBtn.removeAttribute('disabled');
    } else {
      optionalExpensesBtn.setAttribute('disabled', '');
    }
  });
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
