// to count all the pairs of a 2 by 2 matrix from the given matrix
var matrixData = [[1, 2, 1],
                  [2, 2, 2],
                  [2, 2, 2],
                  [1, 2, 3],
                  [2, 2, 1]];

function findAllAround(row, column, matrix){
  var firstOfRow1 = matrix[row][column];
  var firstOfRow2 = matrix[row+1][column];
  var firstOfColumn1 = matrix[row][column+1];
  var firstOfColumn2 = matrix[row+1][column+1];
  return [firstOfRow1, firstOfRow2, firstOfColumn1, firstOfColumn2];
}
function differentSquares(matrix) {
  var arr = [];
  for (var row = 0; row < matrix.length-1; row++){
    var column = 0;
    for (var column = 0; column < matrix[row].length-1; column++){
      arr.push(findAllAround(row, column, matrix));
    }
  }var data = arr.filter(( t={}, b=> !(t[b]=b in t) )); // to remove repeated arrays from the main array.
  console.log(data.length);
}
differentSquares(matrixData);
