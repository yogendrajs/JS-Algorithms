// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var alicePoint = 0;
    var bobPoint = 0;
    for (var i=0; i < 3; i++) {
        if (a[i] > b[i]) {
            alicePoint++;
        } else {
            bobPoint++;
        }
	}
	console.log([alicePoint,bobPoint])
    return [alicePoint, bobPoint];
}
compareTriplets([17, 28, 30], [99, 16, 8]);
