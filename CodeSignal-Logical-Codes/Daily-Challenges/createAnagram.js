function createAnagram(s, t) {
  var d1 = s.split("").sort();
  var d2 = t.split("").sort();

  for (var i = 0; i < d1.length; i++){
    for (var j = 0; j < d2.length; j++){
      if (d1[i] == d2[j]){
        d1.splice(i, 1);
        d2.splice(j, 1);
        i=-1;
        break;
      }
    }
  }console.log(d1.length);
}
createAnagram("AABAA", "BBAAA")
