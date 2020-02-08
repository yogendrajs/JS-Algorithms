function quick(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	// const [pivot, ...rest] = arr
	let mid = arr.length-1;
	const pivot = arr[Math.floor(mid)];
	arr.splice(mid, 1);
	// console.log (arr, pivot)
	let rest = arr.slice();
	// console.log(rest, pivot)

	let left = [];
	let right = [];

	rest.map(i => i < pivot ? left.push(i) : right.push(i))
	console.log(left, right);
	// quick(left);
	return [...quick(left), pivot, ...quick(right)];
	// return quick(left).concat(pivot).concat(quick(right))
}

var arr = [5, 11, 7, 15, 3, 1];
console.log(quick(arr));