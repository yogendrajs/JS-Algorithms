// hackerrank
// https://www.hackerrank.com/challenges/the-hurdle-race/problem

var height = [2, 5, 4, 5, 2];
var k = 7;

var max = Math.max(...height);
if (max < k){
  console.log(0);
}else {
  console.log(max-k);
}
