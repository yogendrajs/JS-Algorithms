// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
	let first = 0;

	if (s.length + t.length <= k)  {
		console.log('Yes');
		return;
	}

	for (let i = 0; i < s.length; i++) {
		if (s[i] == t[i]) first++;
		else break;
	}

	let x = k - (s.length-first + t.length-first);
	if (x % 2 == 0 && x >= 0) {
		console.log('Yes');
		return;
	}

	console.log('No');
}

appendAndDelete('hackerhappy', 'hackerrank', 9);
appendAndDelete('aba', 'aba', 7);
appendAndDelete('ashley', 'ash', 2);
appendAndDelete('abc', 'def', 6);

// special test cases------------------------------------
appendAndDelete('y', 'yu', 2);
appendAndDelete('zzzzzzz', 'zzzzz', 4);
appendAndDelete('qwerasdf', 'qwerbsdf', 6);

// appendAndDelete('abcd', 'abcdert', 10);

// for (let i = 0; i < s.length; i++) {
	// 	if (s[i] != t[i]) {
	// 		first += s.slice(i).length;
	// 		second += t.slice(i).length;
	// 		break;
	// 	}
	// }
	// // console.log(first, second);
	// if (first + second <= k) {
	// 	console.log('Yes');
	// } else console.log('No');