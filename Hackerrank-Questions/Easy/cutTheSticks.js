// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
	
	// small(arr, min);
	let len = []
	while (arr.length != 0) {
		let min = Math.min(...arr);
		let final = []
		// console.log(arr);
		len.push(arr.length);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== min) {
				final.push(arr[i] - min);
			}
		}
		arr = final.slice();
		// console.log(arr.length);
	}
	console.log(len);
}


cutTheSticks([5, 4, 4, 2, 2, 8]);