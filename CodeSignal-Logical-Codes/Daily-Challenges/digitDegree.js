// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.
function digitDegree(n) {
  var count = 0;
  if (String(n).length == 1){console.log(0);}
  else{
    while (true){
      var string = String(n);
      var sum = 0;
      for (var i = 0; i < string.length; i++){
        sum += parseInt(string[i]);
      }count++;
      n = sum;
      if (String(n).length == 1){
      console.log(count);
      break;
      }
    }
  }
}
digitDegree(5);
