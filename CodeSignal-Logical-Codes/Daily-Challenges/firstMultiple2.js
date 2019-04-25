// Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.
// Example
// For divisors = [2, 3, 4] and start = 13, the output should be
// firstMultiple2(divisors, start) = 14.

function firstMultiple2(divisors, start) {
  for (var i = start;; i++){
    for (var j of divisors){
      if (i%j == 0){
        return i;
      }
    }
  }
}
console.log(firstMultiple2([2, 3, 4], 13));
console.log(firstMultiple2([1], 123));
console.log(firstMultiple2([5, 6], 62));
