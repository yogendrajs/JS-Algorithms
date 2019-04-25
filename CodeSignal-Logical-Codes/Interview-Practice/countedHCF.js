var input = require('readline-sync');
var question = input.question('Enter how many times do you want to take input: ');

var arr = [];
for (var i = 0; i < question; i++){
  var next = parseInt(input.question('Enter your inputs now: '));
  arr.push(next);
}
console.log(arr);
for (var i = Math.min(...arr); i >= 0; i--){
  var count = 0;
  for (var j = 0; j < arr.length; j++){
    if (arr[j] % i == 0){
      count++;
    }
  }if (count == arr.length){
    console.log(i);
    break;
  }
}
