// Complete the findDigits function below.
function findDigits(n) {
	let str = n.toString();
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (n% parseInt(str[i]) === 0) {
			count++;
		}
	}
	console.log(count);
}

findDigits(1012);
findDigits(111);
findDigits(12)