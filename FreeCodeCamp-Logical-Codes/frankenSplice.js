function frankenSplice(arr1, arr2, n) {
  var arrays = arr2.slice();
  var k = 0;
  for (var i = n; i < arr1.length+n; i++){
    arrays.splice(i,0,arr1[k]);
    k++;
  }
  console.log(arrays);
  // return arrays;
}
// frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)

