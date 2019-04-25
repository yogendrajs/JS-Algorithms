// Determine whether the given string can be obtained by one concatenation of some string to itself.


// function isTandemRepeat(inputString) {
//   var main = 0;
//   for (var i = 0; i < inputString.length; i++){
//     var count = 0;
//     for (var j = i; j < inputString.length; j++){
//       if (inputString[i] == inputString[j]){
//         count++;
//       }
//     }if (count == 2){
//       main++;
//     }
//   }
//   if (main == inputString.length/2){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// }
// isTandemRepeat("2w2ww")
function isTandemRepeat(inputString){
  var start = inputString[0];
  var count = 0;
  var next;
  for (var i = 1; i < inputString.length; i++){
    if (start == inputString[i]){
      next = i;
      break;
    }
  }for (var i = 0; i < inputString.length; i++){
    for (var j = i+next; j < inputString.length; j++){
      if (inputString[i] == inputString[j]){
        count++;
        break;
      }
    }
  }if (count == inputString.length/2){
    console.log(true);
  }else {
    console.log(false);
  }
}

isTandemRepeat("CodeSignalCodeSignal");
