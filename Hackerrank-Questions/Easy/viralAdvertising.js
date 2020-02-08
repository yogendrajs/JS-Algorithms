// Complete the viralAdvertising function below.
function viralAdvertising(n) {
	let sum = 0;
	let liked = 2;
	for (let i = 1; i <= n; i++) {
		let shared = liked*3;
		sum+=liked;
		liked = Math.floor(shared/2);
	}
	console.log(sum);
}

viralAdvertising(5);