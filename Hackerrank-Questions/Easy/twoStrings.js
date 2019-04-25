var x = "hello";
var data1 = subStrings(x);
var y = "world";
var data2 = subStrings(y);

function subStrings(a){
  var aArr = [];
  for (var i = 0; i < a.length; i++){
    for (var j = i+1; j < a.length+1; j++){
      var data = a.slice(i, j);
      aArr.push(data);
    }
  }
  return aArr;
}

// console.log(data1, data2);
var count = 0;
var insideDream = 0;
for (var i = 0; i < data1.length; i++){
  for (var j = 0; j < data2.length; j++){
    if (data1[i] == data2[j]){
      console.log("YES");
      insideDream++;
      break;
    }
  }if (insideDream > 0){
    break;
  }
  // count++;
}
if (insideDream == 0){
  console.log("NO");
}
