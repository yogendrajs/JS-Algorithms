// to check isNaN wala ;)
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var array = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined){
      continue;
    }
    else if (Number.isNaN(arr[i])){continue;}
    else {
      array.push(arr[i]);
    }
  }
  console.log(array);
  return array;
}
bouncer(["a", "b", "c"])
bouncer([false, null, 0, NaN, undefined, ""])
//=============================================
