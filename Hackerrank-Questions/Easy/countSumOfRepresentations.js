function countSumOfRepresentation(n, l, r) {
	let count = 0;
	for (let i = l; i <= r; i++) {
		let a = n-i;
		if (a >= l && a <= r && a >= i) {
			console.log(i, a);
			count++;
		}
	}
	console.log(count);
}
countSumOfRepresentation(6, 2, 4);