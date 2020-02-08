let a = [12, 9, 34, 47, 29];
// let first = a[0];
let temp;
for (let j = 0; j < a.length; j++) {
	for (var i = 0; i < a.length; i++) {
		temp = a[i];
		// console.log(i, temp);
		if (a[i] > a[i+1]) {
			a[i] = a[i+1];
			a[i+1] = temp;
		}
		// console.log('a', a);
	}
	// console.log(a);
}

console.log(a);