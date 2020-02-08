// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
	// let indexOfZero = c.indexOf(0);
	// let newArrTillZero = c.slice(0, indexOfZero+1);
	// c = [...c, ...newArrTillZero];
	// console.log(c, newArrTillZero);
	
	// let energy = 100;
	// for (let i = 0;; i< (i + k) % c.length) {
	// 	if (c[i] === 1) {
	// 		energy-=2
	// 	}energy-=1;

	// 	if (i%k === 0) {
	// 		console.log(energy);
	// 		return;
	// 	}
	// }
	let n = c.length;
	let energy = 100;
	let i = k % n;
	energy -= c[i] * 2 + 1;
	while (i != 0){
		i = (i + k) % n
		energy -= c[i] * 2 + 1
	}
	console.log(energy);
}

jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);

// n = 10
// c[(i+k) % n]
// 100
// 99
// 98
// 97
// 94
// 91
// 90



// Complete the jumpingOnClouds
// function jumpingOnClouds(c, k) {
//     let j = 100,i = 0;
//     do {
//         j -= (c[i] == 1) ? 3 : 1;
//         i = (i + k) % c.length;
//         console.log(i);
//     }while(i!=0)
//     return j;
// }

// function jumpingOnClouds(c, k) {
//     return c.reduce((previous, current, index) => {
//         if (index % k !== 0) return previous
//         return current === 1 ? previous -3 : previous -1
//     }, 100)
// }



// jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);

// Complete the jumpingOnClouds function below.
// function jumpingOnClouds(c, k) {
//     let i = k;
//     var energy = 100;
//     while (true) {
//         if (c[i] === 1) {
//             energy-=2
//         }energy-=1;
//         i= (i + k) % c.length
//         if (i === 0) {
//             console.log(energy);
//             return;
//         }
//     }
//     // console.log(energy);
// }

// jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);