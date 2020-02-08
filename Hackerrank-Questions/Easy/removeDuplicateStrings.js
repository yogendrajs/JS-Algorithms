function removeDuplicateStrings(inputArray) {
	for (let i = 0; i < inputArray.length; i++) {
		for (let j = i+1; j < inputArray.length; j++) {
			if (inputArray[i] === inputArray[j]) {
				inputArray.splice(j, 1);
				j = i;
			}
		}
	} console.log(inputArray);
}

function removeDuplicateStrings2(inputArray) {
	let arr = [...new Set(inputArray)];
	console.log(arr);
}

function removeDuplicateStrings3(inputArray) {
	let arr = inputArray.filter((x, i) => inputArray.indexOf(x) === i);
	console.log(arr);
}

removeDuplicateStrings3(["a", "a", "ab", "ab", "abc"]);
