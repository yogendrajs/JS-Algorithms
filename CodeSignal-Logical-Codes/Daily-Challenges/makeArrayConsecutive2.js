// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
  var max = Math.max(...statues);
  var min = Math.min(...statues);
  var fullArr = [];
  for (var i = min; i < max; i++){
    fullArr.push(i);
  }var counter = 0;
  for (var j of fullArr){
    var count = 0;
    for (var k of statues){
      if (j == k){
        count++;
      }
    }if (count == 0){
      counter++;
    }
  }console.log(counter);
}
makeArrayConsecutive2([6, 2, 3, 8])
makeArrayConsecutive2([0, 3]);
