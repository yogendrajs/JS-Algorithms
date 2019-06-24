// codesignal logical question

var input = require('readline-sync');
var num = input.question('Enter your input: ');
function smallestNumber(n) {
  var initial = 0;
  var final = 1, data = "1";
  if (n == 1 || n == 0){
    console.log(0);
  }else {
    for (var i = 1; i < n; i++){
      data += initial;
    }console.log(parseInt(data));
  }
}
smallestNumber(num);
