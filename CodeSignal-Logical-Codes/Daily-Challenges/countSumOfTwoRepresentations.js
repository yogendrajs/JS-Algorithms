// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations(n, l, r) = 2.
// These ways are: 2 + 4 = 6 and 3 + 3 = 6

function countSumOfTwoRepresentations(n, l, r) {
  count = 0;
    for (var i = l; i <= r; i++){
      for (var j = i; j <= r; j++){
        if (i+j == n){
          count++;
      }
    }
  }return count;
}
console.log(countSumOfTwoRepresentations(6, 2, 4));

// ====================

