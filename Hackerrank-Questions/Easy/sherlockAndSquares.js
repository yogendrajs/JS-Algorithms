// Complete the squares function below.
function squares(a, b) {
	let count = 0;
	// for (let i = a; i <= b; i++) {
	// 	let sqrt = Math.sqrt(i);
	// 	if (sqrt%1 === 0) {
	// 		i = Math.pow(sqrt+1, 2)-1;
	// 		count++;
	// 	}
	// }
	// console.log(count);

	let i = a;
	while (i <= b) {
		let sqrt = Math.sqrt(i);
		if (sqrt % 1 === 0) {
			count++;
			i = Math.pow(sqrt+1, 2);
		} else i++;
	}
	console.log(count);
}

squares(24, 49);
squares(17, 24);
squares(3, 9);