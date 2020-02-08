// 345
// 534
// 453
// 345

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
	let indexArr = [];
	for (let i = 0; i < k; i++) {
		let k = a.pop();
		a.unshift(k);
	}
	console.log(a);
	for (let i of queries) {
		indexArr.push(a[i]);
	}
	console.log(indexArr);
}

circularArrayRotation([3, 4, 5], 3, [0, 1, 2]);
circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);