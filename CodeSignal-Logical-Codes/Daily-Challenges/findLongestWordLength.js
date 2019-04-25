function findLongestWordLength(str) {
  var count = 0;
  var swap = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == " "){
      if (count > swap){
        swap = count;
      }
      count = 0;
    }else {
      count++;
    }
  }if (count > swap){
    return count;
  }else {
    return swap;
  }
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")
