function countDuplicates(inputArr) {
	let single = new Set(), duplicates = new Set();
	for (let i of inputArr) {
		if (single.has(i)) {
			duplicates.add(i);
			single.delete(i);
		} else {
			single.add(i);
		}
	}
	console.log(duplicates, single);
	console.log(([...duplicates].concat([...single])))
}

countDuplicates([0, 1, 4, 2, 7, 4, 2]);