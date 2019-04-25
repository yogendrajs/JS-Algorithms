// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

function commonCharacterCount(s1, s2) {
  var s1 = s1.split("");
  var s2 = s2.split("");
  var count = 0;
  for (var i = 0; i < s1.length; i++){
    for (var j = 0; j < s2.length; j++){
      if (s1[i] == s2[j]){
        s1.splice(i,1);
        s2.splice(j,1);
        count++;
        i = -1;
        break;
      }
    }
  }return count;
}
// commonCharacterCount("aabcc", "adcaa");
