//=========================
function isSkewSymmetricMatrix(matrix) {
    var matrix = [[0, 0, 1], [0, 0, -2], [-1, 2, 0]]
    var b = []
    for (var i = 0; i < matrix.length; i++){
    var innerarr = [];
    for (var j = 0; j < matrix[i].length; j++){
      if (matrix[j][i] == 0){
        innerarr.push(matrix[j][i])
      }
      else{
        innerarr.push(-matrix[j][i])
      }
    }b.push(innerarr)
  }
  // console.log(b);
  // var b = [[0, 0, -1], [0, 0, 2], [1, -2, 0]]
  count = 0;
  for (var i = 0; i < b.length; i++){
    for (var j = 0; j < b[i].length; j++){
      if (matrix[i][j] != b[i][j]){
        count++;
        break;
      }
    }if (count > 0){
      return false;
      break;
    }
  }
  if (count == 0){
    return true;
  }
}
toy = isSkewSymmetricMatrix([[0, 0, -1], [0, 0, 2], [1, -2, 0]])
console.log(toy);
//==============================

// console.log(true == false == false)
// console.log(3+true);
// console.log(true+false);
// console.log(true+4);
// console.log(true+'4');
// console.log('4' + true);
// console.log(-'13' + 15);
// console.log(-'dust' + 53);
//==========================
