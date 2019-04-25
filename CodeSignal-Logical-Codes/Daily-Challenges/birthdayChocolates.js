//==========================
function birthdayChocolates(arr, sum, times){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    var sums = 0;
    for (var j = i; j < i+times; j++){
      sums = sums+arr[j];
    }
    if (sums == sum){
      count+=1;
    }
  }return count;
}
console.log(birthdayChocolates([4], 4, 1));
