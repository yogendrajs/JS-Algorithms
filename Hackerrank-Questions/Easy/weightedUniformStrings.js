// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let withoutDuplicates = [...new Set(s)];
	let final = [];
	// console.log(withoutDuplicates)

	for (let i = 0; i < withoutDuplicates.length; i++) {
		let count = 0;
		for (let j = 0; j < s.length; j++) {
			if (withoutDuplicates[i] == s[j]) {
				count+= alphabet.indexOf(withoutDuplicates[i]) + 1;
				if (!final.includes(count)){
					final.push(count);
				}
			}
		} // final.push(count);
	}
	console.log(final);
	let single = [];
	for (let i of queries) {
		if (final.includes(i)) {
			single.push('Yes');
		} else single.push('No');
	}
	console.log(single);
}

// weightedUniformStrings('aaabbbbcccddd', [9, 7, 8, 12, 5]);
weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]);