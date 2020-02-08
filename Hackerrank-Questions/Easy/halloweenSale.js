// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
	// Return the number of games you can buy
	let sum = 0, count = 0;
	while (sum <= s) {		
		if (p >= m) {
			sum+=(p);
			count++;
			p -= d;
		} else {
			count++;
			sum+=m;
		}
		
	}
	console.log(count-1);
}

howManyGames(20, 3, 6, 21);
howManyGames(20, 3, 6, 80);
howManyGames(100, 19, 1, 180);