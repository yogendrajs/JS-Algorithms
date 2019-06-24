// hackerrank easy level
// https://www.hackerrank.com/challenges/electronics-shop/problem

var keyboards = [3, 1];
var drives = [5, 2, 8];
var b = 10;

var swap = -1;
for (var i = 0; i < keyboards.length; i++){
  for (var j = 0; j < drives.length; j++){
    if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > swap){
      swap = keyboards[i] + drives[j];
    }
  }
}
console.log(swap);
