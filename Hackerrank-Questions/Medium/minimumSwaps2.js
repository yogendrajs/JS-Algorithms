// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// [2, 3, 4, 1, 5]
//
// [1, 3, 4, 2, 5]
// [1, 2, 4, 3, 5]
// [1, 2, 3, 4, 5]

// [4, 3, 1, 2]
//
// [1, 3, 4, 2]
// [1, 2, 4, 3]
// [1, 2, 3, 4]
//
var arr = [7, 1, 3, 2, 4, 5, 6];
// // function sortNumber(a,b) {
// //         return a - b;
// // }
// var count = 0;
// var sortedArr = arr.slice();
// sortedArr.sort();
// // console.log(arr, sortedArr);
//
// for (var i = 0; i < arr.length; i++){
//   if (arr[i] == i+1){
//     continue;
//   }else {
//     var index = arr.indexOf(sortedArr[i]);
//     var swap = arr[i];
//     arr[i] = arr[index];
//     arr[index] = swap;
//
//     count++;
//   }
// }console.log(count);
// //Another way to do the same question without timeout===================
var count = 0
for (var i = 0; i < arr.length; ++i) {
    var a = arr[i];
    if (a == i + 1)
        continue

    arr[i] = arr[a - 1]
    arr[a - 1] = a

    count++;
    i--;
}
console.log(count);
