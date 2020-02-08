function funnyString(s) {
	let alpha = 'abcdefghijklmnopqrstuvwxyz';
	let reverse = s.split('').reverse().join('');

	let asciiArr = [], asciiRevArr = [];
	for (let i = 0; i < s.length; i++) {
		let index = alpha.indexOf(s[i])+97;
		let indexRev = alpha.indexOf(reverse[i])+97;
		asciiArr.push(index);
		asciiRevArr.push(indexRev);
	}
	// console.log(asciiArr, asciiRevArr);

	let absArr = [], absRevArr = [];
	for (let i = 1; i < asciiArr.length; i++) {
		absArr.push(Math.abs(asciiArr[i] - asciiArr[i-1]));
		absRevArr.push(Math.abs(asciiRevArr[i] - asciiRevArr[i-1]));
	}
	console.log(absArr, absRevArr);

	if (JSON.stringify(absArr) === JSON.stringify(absRevArr)) {
		return true;
	} return false;
}

console.log(funnyString('lmnop'));
console.log(funnyString('acxz'));
console.log(funnyString('bcxz'));