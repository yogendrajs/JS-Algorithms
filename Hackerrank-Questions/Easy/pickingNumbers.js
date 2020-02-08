function pickingNumbers(a) {
	// Write your code here
	a = a.sort((x, y) => x-y);
	console.log(a);
	let max = 0;
	for (let i = 0; i < a.length; i++) {
		let count = 0;
		for (let j = i; j < a.length; j++) {
			if (Math.abs(a[i] - a[j]) <= 1) {
				count++;
			}
		}
		console.log(count, a[i]);
		// max = count > max ? count: max;
		if (count > max) max = count;
	}
	console.log(max);
}

// pickingNumbers([4, 6, 5, 3, 3, 1]);
pickingNumbers([1, 2, 2, 3, 1, 2]);