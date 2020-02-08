// Complete the gemstones function below.
function gemstones(arr) {
	let final = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			let count = 0;
			for (let k = 0; k < arr.length; k++) {
				if (arr[k].includes(arr[i][j])) {
					// console.log('hello', arr[i][j]);
					count++;
				}
			}
			// console.log(count);
			if (count === arr.length && !final.includes(arr[i][j])) {
				final.push(arr[i][j]);
			}
		}
	}
	console.log(final.length);
}

gemstones(['abc', 'abc', 'bc']);
gemstones(['abcdde', 'baccd', 'eeabg']);
gemstones(['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd']);

let arr = ['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd'];
// let final = [];
// for (let i of arr) {
// 	let x = [...new Set(i)];
// 	// console.log(x);
// 	final.push(x);

// }

// console.log(final);
// let d = final[0].filter(x => final[1].includes(x)).filter(x => final[2].includes(x)).filter(x => final[3].includes(x));
// console.log(d);
let x = [... new Set(arr.join('').split(''))].filter(m => arr.every(s => s.includes(m))).length;
console.log(x);
