// Complete the repeatedString function below.
function repeatedString(s, n) {
	let rem = (n % s.length);
	let final = s.slice(0, rem);
	console.log(final);

	let count = 0;
	let counter = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'a') {
			count++;
		}
	}
	for (let i = 0; i < final.length; i++) {
		if (final[i] === 'a') {
			counter++;
		}
	}
	console.log(count);
	console.log(count*Math.floor(n/s.length)+(counter), 'hero');
}


// repeatedString("a", 1000000000000);
repeatedString("aba", 10);
// abaabaabaa
repeatedString("abcac", 10);
// abcacab cac
// repeatedString("abkdadla", 10);
// abkdadlaab