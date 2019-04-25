var x = 1;
var y = 2;
var z = 3;

var a = Math.abs(z-x);
var b = Math.abs(z-y);

if (a == b){
  console.log("Cat C");
}
else if (a > b){
  console.log("Cat B");
}
else {
  console.log("Mouse A");
}
