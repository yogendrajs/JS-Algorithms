// var arr = [2, 3, 6, 6, 5];
// var max = Math.max(...arr);
// var newArr = [];
// for (var i = 0; i < arr.length; i++){
//   if (arr[i] != max){
//     newArr.push(arr[i]);
//   }
// }
// console.log(Math.max(...newArr));
var readline = require('readline-sync')
var s = readline.question('Enter: ')
switch (s[0]){
  case "a":case "e": case "i": case "o": case "u":
  console.log("A");
  break;

  case "b": case "c": case "d": case "f": case "g":
  console.log("B");
  break;

  case "h": case "j": case "k": case "l": case "m":
  console.log("C");
  break;

  default: console.log("D");
}
