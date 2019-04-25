// var a = [[1, 1, 1], [0, 0]]
// var b = [[2, 1, 1], [2, 1]]
// count = 0;
// if (a.length == b.length){
//   for (var x = 0; x < a.length; x++){
//     if (a[x].length != b[x].length){
//       count++;
//       console.log("you've ruined it");
//       break;
//     }
//   }if (count == 0){
//     console.log("Good, I like it");
//   }
// }
// else{
//   console.log(false);
// }
//===========================
function greatestCommonPrimeDivisor(a, b) {
    var swap = -1;
    for (var i = 2; i < b; i++){
      var count = 0;
      if (a%i == 0 && b%i == 0){
        for (var j = 2; j < i; j++){
          if (i%j == 0){
            count++;
            break;
          }
        }if (count == 0){
          if (i > swap){
            swap = i;
          }
        }
      }
    }return swap;
  }
r = greatestCommonPrimeDivisor(100,140)
console.log(r);
//=================================
