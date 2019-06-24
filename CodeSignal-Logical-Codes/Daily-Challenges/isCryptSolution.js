// code-signal logical question

var crypt = ["AAAAAAAAAAAAAA",
 "BBBBBBBBBBBBBB",
 "CCCCCCCCCCCCCC"]
var solution = [["A","0"],
 ["B","1"],
 ["C","2"]];


var dataArrMain = [];
for (var i of crypt){
  var string = "";
  for (var j of i){
    for (var k of solution){
      if (j == k[0]){
        string+=k[1];
      }
    }
  }
  dataArrMain.push(string);
}
console.log(dataArrMain);
var counter = 0;

var dataArr = dataArrMain.slice();

for (var i of dataArr){
  if (i.slice(0, 2) == "00" && i.length > 2){
    var intData = parseInt(dataArrMain[0]) + parseInt(dataArrMain[1]);
    if (intData == dataArrMain[2]){
      counter++;
    }else {
      break;
      // counter++;
    }
  }else if (i.slice(0,1) == "0" && i.length > 1){
    break;
  }
  else {
    var intData = parseInt(dataArr[0]) + parseInt(dataArr[1]);
    if (intData == dataArrMain[2]){
      // console.log(true);break;
      counter++;
    }else {
      break;
      // counter++;
    }
  }
}
if (counter == 3){
  console.log(true);
}else {
  console.log(false);
}
