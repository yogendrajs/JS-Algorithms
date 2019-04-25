// [[1,0,0,0],
//  [0,5,0,0],
//  [0,0,0,0],
//  [0,0,0,1000]]

function isLowerTriangularMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++){
    for (var j = i+1; j < matrix.length; j++){
      if (matrix[i][j] != 0){
        return false;
        // break;
      }
    }
  }return true;
}


console.log(isLowerTriangularMatrix(
 [[1,0,0,0],
  [0,5,0,0],
  [0,0,0,0],
  [0,0,0,1000]]));
console.log(isLowerTriangularMatrix(
  [[1, 0, 0],
   [4, 0, 0],
   [0, 3, 3]]
));
console.log(isLowerTriangularMatrix(
  [[1, 0, 1],
   [0, 5, 0],
   [2, 0, 3]]));
