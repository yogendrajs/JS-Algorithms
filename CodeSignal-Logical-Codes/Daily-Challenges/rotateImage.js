// rotate the image by 90 degrees;
// code signal problem
var a = [[1, 2, 3], 
         [4, 5, 6],
         [7, 8, 9]];

var mainArr = [];
for (var i = 0; i < a[0].length; i++){
  var internalArr = [];
  for (var j = a.length-1; j >= 0; j--){
    internalArr.push(a[j][i]);
  }mainArr.push(internalArr);
}
console.log(mainArr);
