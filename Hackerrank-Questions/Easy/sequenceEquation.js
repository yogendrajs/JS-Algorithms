// Complete the permutationEquation function below.
function permutationEquation(p) {
	
	console.log(
	p.slice()
	.sort((a, b) => a - b)
	.map(x => p.indexOf(x) + 1)
	.map(x => p.indexOf(x) + 1))

}

permutationEquation([5, 2, 1, 3, 4]);
// 1, 2, 3, 4, 5 // sorting
// 3, 2, 4, 5, 1
// 4, 2, 5, 1, 3

// permutationEquation([4, 3, 5, 1, 2]);
// permutationEquation([2, 3, 1]);