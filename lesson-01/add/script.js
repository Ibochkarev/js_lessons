'use strict';

let num = 33721;
let charNum = ('' + num).split('');

let result = charNum.reduce(function (sum, current) {
  return sum * current
});

console.log(result);

let resultPow = result ** 3;
let resultPowString = resultPow + "";

alert(resultPowString[0] + resultPowString[1]);