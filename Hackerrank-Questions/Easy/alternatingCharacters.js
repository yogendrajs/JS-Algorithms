// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
	let count = 0;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i-1]) {
			count++;
		}
	}
	console.log(count);
}

alternatingCharacters('AABAAB');
alternatingCharacters('AAABBBAABB');
alternatingCharacters('AABBAABB');