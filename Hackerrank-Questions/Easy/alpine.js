let a = [0, 3, 4, 2];
let b = [0, 2, 5, 3];
let c = [4523, 8092, 9419, 8076];

let x1 = b[0];
let v1 = b[1];
let x2 = b[2];
let v2 = b[3];

let count = 0;
while (x1 <= x2 && count <= 10000) {
	console.log(x1, x2);
	if (x1 == x2) {
		console.log('yes');
		break;
	}

	// if (x1 > x2) {
	// 	console.log('no');
	// 	break;
	// }
	x1+=v1;
	x2+=v2;
	count++;
}
console.log('no');

// if (v2 > v1) {
// 	if ((x2-x1)%(v1-v2) == 0) {
// 		console.log('yes');
// 	}
// }
// else {
// 	console.log('no');
// }