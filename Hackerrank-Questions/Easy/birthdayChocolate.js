function birthday(s, d, m) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let sum = 0;
		for (let j = i+1; j < i+m; j++) {
			sum+=s[j];
		}
		sum+=s[i];
		if (sum === d) {
			count++;
		}
	}
	console.log(count);

}

birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7);