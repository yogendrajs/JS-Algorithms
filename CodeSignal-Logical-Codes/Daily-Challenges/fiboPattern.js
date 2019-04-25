var readline = require('readline-sync');
var question = parseInt(readline.question('enter the number of rows that you wanna print: '))
var a = 1, b = 1, c;

for (var i = 1; i < question+1; i++){
  var s = "";
  for (var j = 1; j < i+1; j++){
    c = a+b;
    s+=a+" ";
    a = b;
    b = c;
  }console.log(s);
}
