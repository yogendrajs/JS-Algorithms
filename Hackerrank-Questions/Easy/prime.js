const now = require('performance-now');

let t1 = now();

for (let i = 2; i < 10000; i++) {
	let isPrm = 0;
	for (let j = 2; j*j <= i; j++) {
		if (i%j === 0) {
			isPrm++;
			if (isPrm > 0) {
				break;
			}
		}
	}
	if (isPrm === 0) {
		console.log(i);
	}
}
let t2 = now();
console.log((t2-t1)/1000);