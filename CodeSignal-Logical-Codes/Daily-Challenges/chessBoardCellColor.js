var input = require('readline-sync');
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H"];
var num =   ["1", "2", "3", "4", "5", "6", "7", "8"];

var cell1 = input.question("Enter first input: ");
var cell2 = input.question("Enter second input: ");

var first = cell1[0];
var second = cell1[1];

var third = cell2[0];
var forth = cell2[1];

var colorArr = [];

var totalArr = [[first, second], [third, forth]];

for (var k of totalArr){
    var count = 0;
    for (var i of k){
        if (alpha.includes(i)){
            var index = alpha.indexOf(i);
            // console.log(index);
            if (index % 2 == 0){
                count++;
            }
        }
        else if (num.includes(i)) {
            var index1 = num.indexOf(i);
            if (index1 % 2 == 0){
                count++;
            }
        }
    }
    if (count == 2){
        colorArr.push("black");
    }else if (count == 1){
        colorArr.push("white");
    }else {
        colorArr.push("black");
    }
}
if (colorArr[0] == colorArr[1]){
    console.log(true);
}else {
    console.log(false);
}

