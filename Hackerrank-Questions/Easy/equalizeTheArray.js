// Complete the equalizeArray function below.
function equalizeArray(arr) {
    let array = arr.sort((x, y) => x - y);
    // let set = [...new Set(arr)];
    // console.log(set, arr);
	let dict = {};
	let max = 1;
	let maxOccElem = array[0]
	for (let i = 0; i < array.length; i++) {
		let el = array[i];
		if (dict[el] == null) dict[el] = 1;
		else dict[el]++;
		if (dict[el] > max) {
			max = dict[el];
			maxOccElem = el;
		}
	}
	// console.log(max, maxOccElem);

	let index = (array.indexOf(maxOccElem));
	array.splice(index, max);
	console.log(array.length);
}

equalizeArray([3, 3, 2, 1, 3]);
equalizeArray([1, 2, 2, 3]);