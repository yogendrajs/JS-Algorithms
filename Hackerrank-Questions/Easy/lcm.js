const now = require('performance-now');
const t1 = now();
function lcm(...a) {
	let min = Math.min(...a);
	for (let i = min;; i+=min) {
		let count = 0;
		for (let j of a) {
			if (i%j === 0) {
				count ++;
			}
		}
		if (count === a.length) {
			console.log(i);
			break;
		}
	}
}


// lcm(4, 6, 8);
// lcm(12, 15, 20);
// lcm(9, 12);
// lcm(100, 23, 98);
// lcm(8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
lcm(72, 240, 196)
const t2 = now();
const time = t2-t1;
console.log(`time consumed: ${(time/1000).toFixed(3)} seconds`);