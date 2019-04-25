// https://www.hackerrank.com/challenges/the-minion-game/problem?h_r=internal-search&isFullScreen=false
function theMinionGame(input){
  var alpha = ["A", "E", "I", "O", "U"];
  input = input.toUpperCase();
  var arr = [];
  for (var i = 0; i < input.length; i++){
    for (var j = i+1; j < input.length+1; j++){
      var data = input.slice(i, j);
      arr.push(data);
    }
  }

  var vowels = [];
  var consonants = [];
  for (var i = 0; i < arr.length; i++){
    if (!alpha.includes(arr[i][0])){
      consonants.push(arr[i]);
    }else{
      vowels.push(arr[i]);
    }
  }
  console.log(vowels);
  console.log(consonants);

  var sumV = 0;
  var khaliArrV = [];
  for (var a = 0; a < vowels.length; a++){
    var countV = 0;
    if (!khaliArrV.includes(vowels[a])){
      khaliArrV.push(vowels[a]);
      for (var b = 0; b < vowels.length; b++){
          if (vowels[a] == vowels[b]){
            countV++;
          }
      }sumV+=countV;
    }
  }
  console.log(sumV); // this is the kevin's output

  var sumC = 0;
  var khaliArrC = [];
  for (var a = 0; a < consonants.length; a++){
    var countC = 0;
    if (!khaliArrC.includes(consonants[a])){
      khaliArrC.push(consonants[a]);
      for (var b = 0; b < consonants.length; b++){
          if (consonants[a] == consonants[b]){
            countC++;
          }
      }sumC+=countC;
    }
  }
  console.log(sumC); // this is the Stuart's output

  if (sumV > sumC){
    console.log("Kevin " + sumV);
  }else {
    console.log("Stuart " + sumC);
  }
}

theMinionGame("banana")
