// For arr = [7, 2, 2, 5, 10, 7], the output should be
// isSmooth(arr) = true.
function isSmooth(arr) {
  if (arr.length%2 != 0){
    if (arr[0] == arr[arr.length-1]){
      if (arr[(arr.length-1)/2] == arr[0]){
        console.log(true);
      }else {
        console.log(false);
      }
    }else {
      console.log(false);
    }
  }else {
    var firstMid = arr[(arr.length/2)-1];
    var secondMid = arr[arr.length/2];
    var midSum = firstMid + secondMid;
    if (arr[0] == arr[arr.length-1]){
      if (arr[0] == midSum){
        console.log(true);
      }else {
        console.log(false);
      }
    }else{
      console.log(false);
    }
  }
}
isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]);
isSmooth([9, 0, 15, 9]);
