// Complete the superReducedString function below.
function superReducedString(s) {
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i-1]) {
			s = s.substr(0, i-1) + s.substr(i+1);
			i = 0;
		}
		// console.log(s)
	}
	if (s.length === 0) {
		console.log('Empty String');
	} else console.log(s);

}

superReducedString('aaabccddd');