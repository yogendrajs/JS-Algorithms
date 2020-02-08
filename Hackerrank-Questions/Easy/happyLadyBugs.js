// Complete the happyLadybugs function below.
function happyLadybugs(b) {
	let arr = [...new Set(b.split('_').join('').split('').sort())];
	let allNewArr = b.split('_').join('').split('').sort()
	if (b.includes('_')) {
		// console.log(arr, b);
		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let j = allNewArr.indexOf(arr[i]); j < allNewArr.length; j++) {
				if (arr[i] === allNewArr[j]) {
					count++;
				}
			}
			if (count < 2) {
				console.log('No');
				return;
			}
		}
		console.log('Yes');
		return;
	}
	// XXYYZZ
	// console.log(b, arr, allNewArr);
	for (let i = 0; i < arr.length; i++) {
		let mount = 0;
		for (let j = b.indexOf(arr[i])+1; j < b.length; j++) {
			if (arr[i] == b[j]) {
				mount++;
			} else break;
		}
		if (mount === 0) {
			console.log('No');
			return;
		}
	}
	console.log('Yes');
}

// happyLadybugs('RBY_YBR');
// happyLadybugs('X_Y__X');
// happyLadybugs('B_RRBR');
// happyLadybugs('YYR_B_BR');
// happyLadybugs('__');
// happyLadybugs('AABBC');
// happyLadybugs('AABBC_C');
// happyLadybugs('_');
// happyLadybugs('DD__FQ_QQF');
// happyLadybugs('AABCBC');
// happyLadybugs('AABBCC');


// Happy Conditions:

// = There are at least one empty cell and there is no Letter with count 1
// OR
// = There is no empty cell but the given string is happy


happyLadybugs('_');
happyLadybugs('X');
happyLadybugs('XX');
happyLadybugs('X_');
happyLadybugs('XY');
happyLadybugs('X_X');
happyLadybugs('XYX');
happyLadybugs('XYZ');
happyLadybugs('_XX');
happyLadybugs('YXX');
happyLadybugs('X__');
happyLadybugs('X_Y');
happyLadybugs('XXYY');
happyLadybugs('XXYZ');
happyLadybugs('XYXY');
happyLadybugs('XXXY');
happyLadybugs('XYXX');
happyLadybugs('X_XX');
happyLadybugs('X__X');
happyLadybugs('XY_X');
happyLadybugs('X___');
happyLadybugs('XYZZZ');
happyLadybugs('X_XYY');
happyLadybugs('_XY_Y');
happyLadybugs('_XX__');
happyLadybugs('_XXYY');
happyLadybugs('X_XYY');
happyLadybugs('X___X');
happyLadybugs('X__YX');
happyLadybugs('X_X_Y_');
happyLadybugs('XXXYYY');
happyLadybugs('____ZZ');
happyLadybugs('XYZYZY');
happyLadybugs('XXYYZZ');
happyLadybugs('X_XYXY');
happyLadybugs('XZY_YZX');
happyLadybugs('_XYYYXX');