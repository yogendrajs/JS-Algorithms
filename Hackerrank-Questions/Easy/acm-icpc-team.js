// // Complete the acmTeam function below.
function acmTeam(topic) {
// 	// let max = 0;
// 	// let newEl = [];
// 	// for (let i = 0; i < topic.length-1; i++) {
// 	// 	for (let j = i+1; j < topic.length; j++) {
// 	// 		let sum = ((+topic[i]) + (+topic[j])).toString();
// 	// 		sum = sum.replace(/2/g, '1');
// 	// 		// newEl.push(sum);
// 	// 		let sumOfSum = sum.split('').map(x => +x).reduce((x, y) => x+y);
// 	// 		// console.log(sumOfSum);
// 	// 		newEl.push(sumOfSum);
// 	// 		if (sumOfSum > max) max = sumOfSum;
// 	// 	}
// 	// }
// 	// let z = newEl.filter(x => x === max);
// 	// console.log(max, z.length, newEl);

	let max = 0;
	let counter = 0;
	for (let i = 0; i < topic.length-1; i++) {
		for (let j = i+1; j < topic.length; j++) {
			let count = 0; 
			for (let k = 0; k < topic[i].length; k++) {
				if (topic[i][k] === '1' || topic[j][k] === '1') {
					count++;
				}
			}
			if (count > max) {max = count; counter = 1;}
			else if (count === max) counter++;
			// console.log(count, counter);
		}
	}
	console.log(max, counter);
}

acmTeam([ '10101', '11100', '11010', '00101' ]);

// // 10101
// // 11100
// // 11010
// // 00101

acmTeam(['10101', '11110', '00010']);
