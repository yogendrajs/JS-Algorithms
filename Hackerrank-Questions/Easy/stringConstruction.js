// Complete the stringConstruction function below.
function stringConstruction(s) {
	let arr = [];
	let counter = 0;
	for (let i = 0; i < s.length; i++) {
		if (!arr.includes(s[i])) {
			arr.push(s[i]);
			counter++;
		}
	}
	console.log(counter);
}

stringConstruction('abcabc');
stringConstruction('abcd');
stringConstruction('abab');