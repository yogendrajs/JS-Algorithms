// Complete the breakingRecords function below.
function breakingRecords(scores) {
	let max = scores[0], min = scores[0];
	let maxCount = 0, minCount = 0;
	for (let i of scores) {
		if (i > max) {
			max = i;
			maxCount++;
		} else if (i < min) {
			min = i;
			minCount++;
		}
	}
	return (maxCount + '\n' + minCount);
}

let result = (breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(result.join(' ') + '\n')