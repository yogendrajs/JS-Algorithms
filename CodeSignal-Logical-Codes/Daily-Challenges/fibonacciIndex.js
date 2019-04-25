var a = 0;
var b = 1;
var input = 2;
arr = new Array();
while(true){
  var c = a+b;
  exp = a;
  length = String(exp).length;
  arr.push(exp);
  if (length == input){
    var index = arr.indexOf(exp);
    console.log(index);
    break;
  }
  a = b;
  b = c;
}
