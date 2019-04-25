function shareAnApple(a, b) {
  if (a == b){
    return false;
  }
  else{
    if (a > b){
      a = a-1;
      b = b+1;
    }else if (a<b){
      b = b-1;
      a = a+1;
    }if (a == b){
      return true;
    }else{
      return false;
    }
  }
}
console.log(shareAnApple(5,7));
