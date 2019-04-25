var input = require('readline-sync');
var pages = parseInt(input.question('Enter the total number of pages in the book: '));
var page = parseInt(input.question('Enter the page number that you wanna open: '))

if (pages%2 == 0){
  pages+=1;
}

var mainArr = [];
var insert = 0;
for (var i = 0; i < pages/2; i++){
  var internalArr = [];
  for (var j = 0; j < 2; j++){
    internalArr.push(insert);
    insert++;
  }mainArr.push(internalArr);
};
console.log(mainArr);

// for counting of flipping of pages from starting position
var count = 0;
for (var i of mainArr){
  if (i.includes(page)){
    break;
  }else {
    count++;
  }
}

// for counting of pages from the end towards the given `page`
var counter = 0;
for (var i = mainArr.length-1; i>=0; i--){
  if (mainArr[i].includes(page)){
    break;
  }else {
    counter++;
  }
}

if (count > counter){
  console.log(counter);
}else {
  console.log(count);
}
