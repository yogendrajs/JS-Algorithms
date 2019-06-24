// codesignal logical question

var input = require('readline-sync');
var string = input.question('Enter the string: ');

var count = 0;
for (var i = 0; i < string.length; i++){
  if (string.indexOf(string[i]) == string.lastIndexOf(string[i])){
    console.log(string[i]);
    count++;
    break;
  }
}
if (count == 0){
  console.log("_");
}
