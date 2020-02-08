// Complete the utopianTree function below.
function utopianTree(n) {
	let final = 1;
	for (let i = 0; i < n; i++) {
		if (i%2 == 0) {
			final*=2;
		}
		else {
			final+=1;
		}
	}
	console.log(final);

}

utopianTree(0);