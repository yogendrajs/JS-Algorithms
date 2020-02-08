let a = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51];
a = a.sort((a, b) => a-b)
console.log(a);

function pairSum(a, sum) {
    // for (let i = 0; i < a.length; i++) {
    //     for (let j = a.length-1; j >= 0, i < j; j--) {
    //         if (a[i] + a[j] === 100) {
    //             console.log(a[i], a[j]);
    //         }
    //     }
    // }

    let l = 0, r = a.length-1;
    while (l < r) {
        if (a[l] + a[r] === sum) {
            console.log(a[l], a[r]);
            // return;
        }
        a[l] + a[r] < sum ? l++: r--;
    }
}

pairSum(a, 100);

// function halvingSum(n) {
//     let sum = 0;
//     while (n > 0) {
// 		sum += n;
// 		console.log(sum, n)
//         n=Math.floor(n/2);
//     }
//     return sum;
// }

// console.log(halvingSum(25))

function sumUpDigits(inputString) {
    let sum = 0;
    for (let i of inputString) {
        // console.log(typeof(parseInt(i)));
        if (Number.isInteger(parseInt(i))) {
			console.log(i);
            sum += parseInt(i);
        }
    }
    console.log (sum);
}

// sumUpDigits("2 apples, 12 oranges");