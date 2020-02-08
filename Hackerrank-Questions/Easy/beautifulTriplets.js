// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let x = arr[i] + d;
		let y = x + d;
		// console.log(arr[i], x, y);
		
		if (arr.includes(x) && arr.includes(y)) {
			count++;
		}
	}
	console.log(count);
}

beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);
beautifulTriplets(1, [2, 2, 3, 4, 5]);