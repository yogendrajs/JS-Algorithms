function getTotalX(a, b) {
	let total = 0;
	// Write your code here
	for (i = 1; i <= 100; i++) {
		let count1 = 0, count2 = 0;
		for (let j of a) {
			if (i%j === 0) {
				count1++;
			}
		}
		// console.log(count1, i)
		if (count1 === a.length) {
			// console.log(i);
			for (let k of b) {
				if (k % i === 0) {
					count2++;
				}
			}
			if (count2 === b.length) {
				total++;
			}
		}
	}
	console.log(total);
}

getTotalX([1], [100]);