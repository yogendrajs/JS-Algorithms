// https://www.hackerrank.com/challenges/the-time-in-words/problem?h_r=internal-search
var readline = require('readline-sync');
var numberWords = require('number-to-words');

var h = parseInt(readline.question('Enter hours: '));
var m = parseInt(readline.question('Enter minutes: '));

if (m == 0){
  console.log(numberWords.toWords(h) + " o' clock");
}

if (m == 30){
  console.log("half past " + numberWords.toWords(h));
}
if (m >= 1 && m <= 30){
  if (m == 15){
    console.log("quarter past " + numberWords.toWords(h));
  }else {
    if (m == 1){
      console.log(numberWords.toWords(m) + " minute past " + numberWords.toWords(h));
    }else {
      console.log(numberWords.toWords(m) + " minutes past " + numberWords.toWords(h));
    }
  }
}
else if (m > 30){
  h++;
  if (m == 45){
    console.log("quarter to " + numberWords.toWords(h));
  }else {
    m = 60-m;
    var num = numberWords.toWords(m);
    console.log(num + " minutes to " + numberWords.toWords(h));
  }
}
