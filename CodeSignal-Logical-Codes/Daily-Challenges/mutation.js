///==========================
function mutation(arr) {
  var arr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
  for (var i = 0; i < arr[1].length; i++){
    var count = 0;
    for (var j = 0; j < arr[0].length; j++){
      if (arr[1][i] == arr[0][j]){
        count++;
        break;
      }
    }if (count == 0){
      return false;
    }
  }return true;
}

mutation(["hello", "hey"]);
//=============================
