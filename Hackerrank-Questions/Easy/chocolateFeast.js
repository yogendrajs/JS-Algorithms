// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
    let firstBuy = (n / c),
        sum = Math.floor(n / c),
        wrapper = (firstBuy % m),
		second;
		
    while (firstBuy >= m) {

        second = Math.floor(firstBuy / m);
        sum += second;
        wrapper = Math.floor(firstBuy % m);

        firstBuy = second + wrapper;
	}
	
    return sum;
}

console.log(chocolateFeast(7, 3, 2));
console.log(chocolateFeast(15, 3, 2));
console.log(chocolateFeast(6, 2, 2));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(10, 2, 5));
// 15 3 2 = 5
// 5 2 = 2 1
// 2 + 1 = 3
// 3 2 = 1 1
// 2 2 = 1 0

// 6 2 2 = 3
// 3 2 = 1 1
// 1 + 1 = 2
// 2 2 = 1 0
