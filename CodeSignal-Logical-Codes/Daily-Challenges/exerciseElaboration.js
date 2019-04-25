var readline = require('readline-sync');
var p = parseInt(readline.question('Enter p: '));
var n = parseInt(readline.question('Enter n: '));

function exerciseElaboration(p, n) {
  var arr = [p, p];
  var sum = 0;
  for (var i = 1; i < n+1; i++){
    arr.splice(1, 0, 0);
  }var num = parseInt(arr.join(""));
  var sq = String(Math.pow(num, 2)).split("");
  for (var i of sq){
    sum += parseInt(i);
  }console.log(sum);
}
exerciseElaboration(p, n);
