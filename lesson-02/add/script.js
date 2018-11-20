'use strict';
// Add one
let week = ['Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ],
  today = new Date();

for (let i = 0; i < week.length; i++) {
  if (i == week.length - 1 || i == week.length - 2) {
    if (i == today.getDay() - 1 || i == today.getDay() + 6) {
      document.write(week[i].italics().bold() + '<br>');
    } else {
      document.write(week[i].bold() + '<br>');
    }
  } else {
    if (i == today.getDay() - 1) {
      document.write(week[i].italics() + '<br>');
    } else {
      document.write(week[i] + '<br>');
    }
  }
}
console.log(today);

// Add two 
let arr = ['54564564',
  '33345646',
  '77712',
  '34547',
  '556565',
  '878978798',
  '33336556'
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
    console.log(arr[i]);
  }
}