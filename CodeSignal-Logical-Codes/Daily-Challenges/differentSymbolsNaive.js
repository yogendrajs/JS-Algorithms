function differentSymbolsNaive(s) {
  var arr = [];
  for (var i of s){
    if (!arr.includes(i)){
      arr.push(i);
    }
  }console.log(arr.length);
}
differentSymbolsNaive('abca');
