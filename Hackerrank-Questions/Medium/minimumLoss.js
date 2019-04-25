// https://www.hackerrank.com/challenges/minimum-loss/problem
var b = ""
var a = b.split(" ").map(function(item) {
    return parseInt(item, 10);
});

//For hackerrank-----------
// var readline = require('readline-sync');
// var input = parseInt(readline.question('Enter your input: '));
// var a = [];
// for (var i = 0; i < input; i++){
//   var userInput = parseInt(readline.question('Enter user input: '));
//   a.push(userInput);
// }
//-------------------------
// var arr = [];
var swap = Math.max(...a);
for (var i = 0; i < a.length; i++){
  for (var j = i; j < a.length; j++){
    if (a[i] != a[j]){
      var minus = a[i]-a[j];
      // console.log(a[i], a[j]);
      if (minus > 0){
        if (minus < swap){
          swap = minus;
        }
      }
    }
  }
}console.log(swap);
// console.log(swap);
