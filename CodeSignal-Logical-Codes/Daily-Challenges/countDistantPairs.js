// For inputString = "abacaba" and distance = 1, the output should be
// countDistantPairs(inputString, distance) = 3.
// Let's list them as a pairs of indices (0-based): [0, 2]: "a" and "a", [2, 4]: "a" and "a" and [4, 6]: "a" and "a".

function countDistantPairs(inputString, distance) {
  var count = 0;
  for (var i = 0; i < inputString.length; i++){
    var j = i+distance+1;
    if (inputString[i] == inputString[j]){
      count++;
    }
  }console.log(count);
}
countDistantPairs('abacaba', 3)
