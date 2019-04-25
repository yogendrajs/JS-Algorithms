// For inputString = "abacaba", the output should be
// countNeighbouringPairs(inputString) = 0;
function countNeighbouringPairs(inputString) {
  var count = 0;
  for (var i = 0; i < inputString.length; i++){
    var j = i+1;
    if (inputString[i] == inputString[j]){
      count++;
    }
  }console.log(count);
}
countNeighbouringPairs("aabaa")
