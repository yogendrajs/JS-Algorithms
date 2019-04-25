function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0){
    var data = "";
    for (var i = 0; i < num; i++){
      data+=str;
    }
    return data;
  }
  else {
    return ""
  }
  return str;
}

repeatStringNumTimes("abc", 3);
