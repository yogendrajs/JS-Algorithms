function miniMaxSum(arr) {
    // var arr = [1, 2, 3, 4, 5];
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr.slice();
        var sum = 0;
        b.splice(i, 1);
        // console.log(b);
        for (var j = 0; j < b.length; j++) {
            sum += b[j];
        } array.push(sum);
    }//console.log(array);
    return (Math.min(...array) + " " + Math.max(...array));
}
console.log(miniMaxSum([1, 2, 3, 4, 5]));
