'use strict';

let num = [ 3, 3, 7, 2, 1 ];

let result = num.reduce(function (sum, current) {
  return sum * current
});

console.log(result);

let resultPow = result ** 3;
let resultPowString = resultPow + "";

alert(resultPowString[0] + resultPowString[1]);