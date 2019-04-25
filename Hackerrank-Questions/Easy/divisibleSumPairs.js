// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=internal-search
var ar = [1, 3, 2, 6, 1, 2];
var k = 3;

var count = 0;
for (var i = 0; i < ar.length; i++){
  for (var j = i+1; j < ar.length; j++){
    var sum = ar[i] + ar[j];
    if (sum % k == 0){
      count++;
    }
  }
}
console.log(count);
