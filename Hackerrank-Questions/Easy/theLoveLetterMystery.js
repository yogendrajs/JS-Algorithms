// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {
	let reverse = s.split("").reverse().join("");

	if (s === reverse) {
		console.log(0);
		return;
	}
    if (s.slice(-1) === "a") {
        s = reverse;
	}	
    // console.log(s);
    let alpha = "abcdefghijklmnopqrstuvwxyz";
	let str = Math.floor(s.length / 2);
	let sum = 0;
    for (let i = 0; i < str; i++) {
        if (s[i] !== s.slice(s.length - i - 1, s.length - i)) {
            let palFirst = alpha.indexOf(s[i]);
            let palSecond = alpha.indexOf(
                s.slice(s.length - i - 1, s.length - i)
            );
			let total = palSecond - palFirst;
			sum+=total;
        }
	}
	console.log(sum);
}

theLoveLetterMystery("cde");
theLoveLetterMystery("adslkfjas");
theLoveLetterMystery('abcba')