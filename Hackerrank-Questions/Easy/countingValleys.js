// Complete the countingValleys function below.
function countingValleys(n, s) {
	let path = 0, valley = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'U') path++;
		else if (s[i] === 'D') path--;
		// console.log(path);
		if (path === 0 && s[i] === 'U') {
			valley++;
		}
	}
	console.log(valley);
}

countingValleys(8, 'DDUUDDUDUUUD');