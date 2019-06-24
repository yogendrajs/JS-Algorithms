// hackerrank
// https://www.hackerrank.com/challenges/picking-numbers/problem

 a = [4, 6, 5, 3, 3, 1];

var mainArr = [];
for (var i = 0; i < a.length; i++){
  var localArr = [];
  for (var j = i+1; j < a.length; j++){
    if ((a[i] - a[j]) <= 1){
      localArr.push(a[j]);
    }
  }localArr.push(a[i]);
  mainArr.push(localArr);
}
console.log(mainArr);
var max = 0;
for (var i of mainArr){
  if (i.length > max){
    max = i.length;
  }
}
console.log(max);
