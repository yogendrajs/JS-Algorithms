// Complete the marsExploration function below.
function marsExploration(s) {
	let totalSos = s.length/3;
	let originalSos = 'SOS'.repeat(totalSos);
	// console.log(originalSos);
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== originalSos[i]) {
			count++;
		}
	}
	console.log(count);
}

marsExploration('SOSSOT');