function arrayConversion(inputArray) {
    var i = 0;
    while (inputArray.length !== 1) {
        var finalArr = [];
        for (var j = 0; j < inputArray.length - 1; j += 2) {
            if (i % 2 === 0) {
                var s = inputArray[j] + inputArray[j + 1];
                finalArr.push(s);
            } else {
                var s = inputArray[j] * inputArray[j + 1];
                finalArr.push(s);
            }
        }
        inputArray = finalArr.slice();
        i++;
    }
    console.log(inputArray[0]);
}

var inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
arrayConversion(inputArray);
