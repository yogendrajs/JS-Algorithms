// Complete the fairRations function below.
function fairRations(B) {
	let sum = B.reduce((acc, element) => acc+element);
	if (sum%2!=0) return 'NO';
	
    let count = 0;
    let flag = true;
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < B.length-1; j++) {
            if (B[j] % 2 != 0) {
                B[j] += 1;
                B[j + 1] += 1;
                count += 2;
                flag = false;
			}
		}
		// console.log(flag);
		if (flag) break;
    }
	return count;
}

console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([4, 5, 6, 7]));
console.log(fairRations([1, 2]));
console.log(fairRations([2, 4, 6]));