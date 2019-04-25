// For inputString = "abac", the output should be
// differentSubstrings(inputString) = 9.
// They are:
//
// "a", "b", "c",
// "ab", "ac", "ba",
// "aba", "bac",
// "abac"

function differentSubstrings(input) {
  var arr = [];
  for (var i = 0; i < input.length; i++){
    for (var j = i+1; j < input.length+1; j++){
      arr.push(input.slice(i, j));
    }
  }console.log(arr);
}
differentSubstrings('abac')
