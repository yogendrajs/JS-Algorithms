// Complete the rotLeft function below.
function rotLeft(a, d) {
	let first = a.slice(0, d);
	let second = a.slice(d);

	console.log([...second, ...first]);

}

rotLeft([1, 2, 3, 4, 5], 2);