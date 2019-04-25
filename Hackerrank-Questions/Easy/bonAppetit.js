var arr = [3, 10, 2, 9];
var k = 1;
var b = 7;

arr.splice(k, 1);
var sum = 0;
for (var i = 0; i < arr.length; i++){
  sum += arr[i];
}
var avg = sum/2;
if (avg == b){
  console.log('Bon Appetit');
}
else {
  console.log(b-avg);
}
