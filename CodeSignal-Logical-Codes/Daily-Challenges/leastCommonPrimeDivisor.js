function leastCommonPrimeDivisor(a, b) {
  var swap = 0;
  for (var i = a*b; i > 1; i--){
    if (a%i == 0 && b%i == 0){
      var count = 0;
      for (var j = 2; j < i; j++){
        if (i%j == 0){
          count++;
        }
      }if (count == 0){
        swap = i;
      }
    }
  }if (swap > 1){
    console.log(swap);
  }else {
    console.log(-1);
  }
}
leastCommonPrimeDivisor(2,3);
