// Complete the workbook function below.
function workbook(n, k, arr) {
	let pageNumber = 1;
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 1; j <= arr[i]; j++) {
			if (j === pageNumber) count++;
			if (j%k == 0 || j === arr[i]) pageNumber++;
		}
	}
	console.log(count);
}

workbook(5, 3, [4, 2, 6, 1, 10]);
