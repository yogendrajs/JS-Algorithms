var strings = ['aba', 'baba', 'aba', 'xzxb'];
var queries = ['aba', 'xzxb', 'ab'];


var countArr = [];
for (var i of queries){
  var count = 0;
  for (var j of strings){
    if (i == j){
      count++;
    }
  }countArr.push(count);
}
console.log(countArr);
