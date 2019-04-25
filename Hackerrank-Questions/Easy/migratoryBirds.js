var arr = [1, 1, 2, 2, 3];
var nonrepeatArr = [];
for (var i = 0; i < arr.length; i++){
  if (!nonrepeatArr.includes(arr[i])){
    nonrepeatArr.push(arr[i]);
  }
}//console.log(nonrepeatArr);

var maxArr = [];
var swap = 0;
var index = 0;
for (var i = 0; i < nonrepeatArr.length; i++){
  var count = 0;
  for (var j = 0; j < arr.length; j++){
    if (nonrepeatArr[i] == arr[j]){
      count++;
    }
  }if (count > swap){
    swap = count;
    index = i;
  }
}console.log(nonrepeatArr[index]);

// var index = maxArr.indexOf(Math.max(...maxArr));
// console.log(nonrepeatArr[index]);

// var arr = [1, 1, 2, 2, 3];
// var swap = 0;
// var number = 0;
// for (var i = 0; i < arr.length; i++){
//   var count = 0;
//   for (var j = i+1; j < arr.length; j++){
//     if (arr[i] == arr[j]){
//       count++;
//     }
//   }if (count > swap){
//     swap = count;
//     number = arr[i];
//   }
// }console.log(number);
