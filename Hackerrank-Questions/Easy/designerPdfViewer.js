// hackerrank
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

var h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
var word = "zaba";
var alpha = "abcdefghijklmnopqrstuvwxyz";

var maxArray = [];
for (var i of word){
  for (var j of alpha){
    var index = alpha.indexOf(i);
    // console.log(h[index]);
    maxArray.push(h[index]);
    break;
  }
}
var length = Math.max(...maxArray);
var width = word.length;
console.log(length*width);
