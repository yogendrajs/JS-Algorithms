var arr = [1, 2, 3, 4, 5];
var rotation = 4;

// for (var times = 0; times < rotation; times++){
//   var newArr = [];
//   for (var i = 1; i < arr.length; i++){
//     newArr.push(arr[i]);
//   }newArr.push(arr[0]);
//   arr = newArr.slice();
// }
// console.log(arr);
// console.log(arr.join(" "));

// OR THIS IS ALSO RIGHT-----------------------------------
// for (var times = 0; times < rotation; times++){
//   var newArr = arr.slice(1, arr.length);
//   newArr.push(arr[0]);
//   arr = newArr.slice();
// }
// console.log(arr);

// OR THIS IS ALSO RIGHT-----------------------------------
for (var i = 0; i < rotation; i++){
  var data = arr.shift();
  arr.push(data);
}
console.log(arr);
