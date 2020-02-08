// 1234 17181920
//  567 141516
//   89 1213
//    10 11

// 4

// 4*4+1
// 3*4+2
// 2*4+4
// 1*4+7


// 12345     2627282930
//  6789     22232425
//   101112  192021
//    1314   1718
//     15    16

// 5*5+1
// 4*5+2
// 3*5+4
// 2*5+7
// 1*5+11
const readline = require('readline-sync')
const size = readline.question('Enter the rows: ')

let a = 1;
let count = 0;
let avar = 1;
for (let i = size; i > 0; i--) {
	let str = '';
	str+= " ".repeat(count)
	for (let j = 0; j < i; j++) {
		str+=a + ' ';
		a++;
	}

	k = avar+(i*size);
	for (let j = 0; j < i; j++) {
		str+=k + ' ';
		k++;
	}
	count++;
	avar+=count;
	console.log(str);
}