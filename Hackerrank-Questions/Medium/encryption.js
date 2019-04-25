//https://www.hackerrank.com/challenges/encryption/problem
var readline = require('readline-sync');
// var s = "if man was meant to stay on the ground god would have given us roots";
var s = readline.question('Enter your sentence: ')
var sentence = s.split(" ").join("");
// console.log(sentence);
var length = sentence.length;
var sq = Math.sqrt(length);
var column = Math.ceil(sq);

var wordArr = [];
for (var i = 0; i < length; i+=column){
  var data = "";
  for (var j = i; j < i+column; j++){
    if (sentence[j] == undefined){break;}
    data += sentence[j];
  }wordArr.push(data);
}
console.log(wordArr);
var finalWord = "";
for (var k = 0; k < wordArr[0].length; k++){
  var newWords = "";
  for (var l = 0; l < wordArr.length; l++){
    if (wordArr[l][k] == undefined){break;}
    newWords+=wordArr[l][k];
  }finalWord+=newWords+" ";
}
console.log(finalWord);
