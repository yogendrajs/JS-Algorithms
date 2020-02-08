// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
	// let check = 0;
	// for (let i = 1; i <= m; i++) {
	// 	check = s;
	// 	s++;
	// 	if (s > n) s = 1;
	// }
	// console.log(check);

	let x = (m%n+s-1)%n;
	console.log (x === 0 ? n: x);
}

saveThePrisoner(7, 19, 2);
saveThePrisoner(4, 6, 2);
saveThePrisoner(3, 7, 3);