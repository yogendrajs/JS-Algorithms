// Complete the palindromeIndex function below.
function palindromeIndex(s) {

	if (s === s.split('').reverse().join('')) {
		console.log(-1);
		return;
	}

    for (let j = 0; j < s.length; j++) {
        let x = s.slice(0, j) + s.slice(j + 1);
        // console.log(x);
        let reverse = x.split("").reverse().join("");
        if (x === reverse) {
            console.log(j);
            break;
        }
    }
}

palindromeIndex("aaab");
palindromeIndex("baa");
palindromeIndex("aaa");
palindromeIndex("bcbc");
