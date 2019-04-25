// For a = [152, 23, 7, 887, 243], the output should be
// digitDifferenceSort(a) = [7, 887, 23, 243, 152].
//
// Here are the differences of all the numbers:
//
// 152: difference = 5 - 1 = 4;
// 23: difference = 3 - 2 = 1;
// 7: difference = 7 - 7 = 0;
// 887: difference = 8 - 7 = 1;
// 243: difference = 4 - 2 = 2.
// 23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first.

function sortNumber(a,b) {
        return a - b;
}
//
// function digitDifferenceSort(a) {
//
// }

var sortMax = [];
var a = [152, 23, 7, 887, 243];
for (var i = 0; i < a.length; i++){
  var data = String(a[i]);
  var letterList = [];
  for (var j = 0; j < data.length; j++){
    letterList.push(data[j]);
  }//console.log(letterList);
  var max = Math.max(...letterList);
  var min = Math.min(...letterList);
  // console.log(max-min);
  sortMax.push(max-min);
}
console.log(sortMax);
console.log(a);
sortMax.sort(sortNumber);
a.sort(sortNumber);
console.log(sortMax);
console.log([7,887,23,243,152]);
// ╔┓┏╦━━╦┓╔┓╔━━╗
// ║┗┛║┗━╣┃║┃║ X║
// ║┏┓║┏━╣┗╣┗╣╰╯║
// ╚┛┗╩━━╩━╩━╩━━╝﻿
