let matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];


function isIdentityMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let count = 0;
        if (matrix[i][i] === 1) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    count++;
                }
            }
            if (count !== matrix.length-1) {
                return false;
            }
        } else {
            return false;
        }
	}
	return true;
}

console.log(isIdentityMatrix(matrix))