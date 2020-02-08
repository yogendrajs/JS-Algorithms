function maxDigit(n) {
	let max = 0;
	let str = String(n);
	for (let i of str) {
		if (max < i) {
			max = i;
		}
	}
	return parseInt(max);
}
