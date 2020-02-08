// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
	let count = 0;
	for (let x = i; x <= j; x++) {
		let li = x.toString().split('').reverse().join('');
		// console.log(x, parseInt(li));
		let sub = Math.abs(x-li);
		if (sub%k === 0) {
			count++;
		}
	}
	console.log(count);
}

beautifulDays(20, 23, 6);