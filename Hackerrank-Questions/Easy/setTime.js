// setTimeout(() => {
// 	console.log('hello world!');
// }, 5000);

// console.log('this is here')

// setTimeout(() => {
// 	console.log('this is three seconds!');
// }, 3000);

// function one() {
// 	console.log('this is the first condition');
//     three();
// }

// function two() {
	
// 	setTimeout(() => {
// 		one();
// 	}, 3000);
// }

// function three() {
//     console.log("this is three");
// }

// two();

// const s = new Date().getSeconds();
// console.log('previous seconds', s);
// setTimeout(function() {
// 	console.log('now', new Date().getSeconds());
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500)

// while (true) {
//   if (new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds")
//     break;
//   }
// }

// setInterval(() => {
// 	console.log('this is here!')
// }, 4000);

// IIFE
// Immediately Invoked Function Expression 

let a = new Promise((resolve, reject) => {
	reject('this is rejected promise')
})

// a.then(data => console.log(data))
// .catch(err => console.log('this is here', err));

let resolve = (async function () {
	
	try {
		let data = await a;
		console.log(data);
	}
	catch(err) {
		console.log('this is reject', err);
	}
})

resolve();