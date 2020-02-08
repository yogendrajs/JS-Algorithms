function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let app = [], or = [];
	let appCount= 0, orCount= 0;
	for (let i of apples) {
		app.push(a+i);
	}
	for (let j of oranges) {
		or.push(b+j);
	}
	for (let k of app) {
		if (s <= k && k <= t) {
			appCount++;
		}
	}
	for (let l of or) {
		if (s <= l && l <= t) {
			orCount++;
		}
	}
	return (appCount + '\n' + orCount);

}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
