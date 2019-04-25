// For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be
// splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].

function splitByValue(k, elements) {
  var empty = [];
  for (var i = 0; i < elements.length; i++){
    if (k == 0){return elements;}
    if (elements[i] < k){
      empty.push(elements[i]);
    }
  }
  for (var i = 0; i < elements.length; i++){
    var count = 0;
    for (var j = 0; j < empty.length; j++){
      if (elements[i] == empty[j]){
        count++;
        break;
      }
    }if (count == 0){empty.push(elements[i]);}
  }console.log(empty);
}
splitByValue(5, [1, 3, 5, 7, 6, 4, 2]);
splitByValue(0, [5, 2, 7, 3, 2]);
