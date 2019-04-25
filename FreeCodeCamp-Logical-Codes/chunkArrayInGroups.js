function chunkArrayInGroups(arr, size) {
  var outer = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    var inner = [];
    for (var j = count; j < count+size; j++){
      var data = arr[j];
      if (data == undefined && j > arr.length){break;}
      else if(data == undefined && j <= arr.length){inner.push(data); break;}
      inner.push(data);
    }if (data == undefined){break;}
    else{
    count+=size;
    outer.push(inner);
    }
  }console.log(outer);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

