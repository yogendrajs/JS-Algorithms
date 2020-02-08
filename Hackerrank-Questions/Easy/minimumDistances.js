// Complete the minimumDistances function below.
function minimumDistances(a) {
    let newArr, empty = [], min = a[0], count = 0;
    for (let i = 0; i < a.length; i++) {
        if (!empty.includes(a[i])) {
			empty.push(a[i]);
            newArr = a.slice();
            newArr.splice(i, 1);
            if (newArr.includes(a[i])) {
				count++;
				let z = Math.abs(i-(newArr.indexOf(a[i]) + 1));
				if (z < min) {
					min = z;
				}
            }
        }
	}
	if (count === 0) {console.log(-1); return -1;}
	else console.log(min);
}

minimumDistances([3, 2, 1, 2, 3]);
minimumDistances([7, 1, 3, 4, 1, 7]);