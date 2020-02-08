// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
	for (let i = 1; i < n; i++) {
		let k = arr[i];
		let j = i-1;
		while (j >= 0 && arr[j] > k) {
			arr[j+1] = arr[j];
			console.log(arr);
			j--;
		}
		arr[j+1] = k;
	}	
	console.log(arr);
}
let a = [1, 2, 4, 5, 3];
let b = [2, 4, 6, 8, 3];
let c = [3, 4, 7, 5, 6, 2, 1];
insertionSort1(7, c);