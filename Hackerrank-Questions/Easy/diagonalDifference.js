var arr = [[1, 2, 3],
           [4, 5, 6],
           [9, 8, 9]];

var ltrSum = 0;
for (var i = 0; i < arr.length; i++){
  ltrSum += arr[i][i];
}
console.log(ltrSum);

var rtlSum = 0;
var j = arr[0].length-1;
for (var i = 0; i < arr.length; i++){
  rtlSum += arr[i][j];
  j--;
}
console.log(rtlSum);
console.log(Math.abs(ltrSum-rtlSum));
