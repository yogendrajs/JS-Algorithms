// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room,
// your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

var matrix = [[0, 1, 1, 2],
             [0, 5, 0, 0],
             [2, 0, 3, 3]]
function matrixElementsSum(matrix) {
  var count = 0;
  for (var i = 0; i < matrix[0].length; i++){
    for (var j = 0; j < matrix.length; j++){
      // console.log(matrix[j][i]);
      if (matrix[j][i] != 0){
        count+= matrix[j][i];
      }else{
        break;
      }
    }
  }console.log(count);
}
matrixElementsSum(matrix)
