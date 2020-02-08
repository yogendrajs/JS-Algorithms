// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
	let str = '';
    let flag = true;
    for (let i = p; i <= q; i++) {
        let sq = Math.pow(i, 2).toString();
        let left = sq.slice(0, Math.floor((0+sq.length)/2)) || 0;
        let right = sq.slice(Math.floor((0+sq.length)/2));
        // console.log(`left- ${left}, right- ${right}, sq- ${sq}, i-${i}`);
        if (+left + +right  === i) {
            // console.log(i);
            flag = false;
            str+=i + ' ';
        }
    }
    console.log(flag ? 'INVALID RANGE': str);
}

kaprekarNumbers(1, 100000);
kaprekarNumbers(100, 200);