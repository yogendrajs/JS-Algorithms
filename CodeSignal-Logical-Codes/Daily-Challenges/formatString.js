// For input = " abc   a aa  a a ", the output should be
// formatString(input) = "abc a aa a a".
function formatString(input) {
  var split = input.trim().split("");
  console.log(split);
  var count = 0;
  for (var i = 0; i < split.length; i++){
    if (split[i] == " "){
      count++;
    }else {count = 0;}
    if (count > 1){
      split.splice(i, 1);
      i = -1;
    }
  }console.log(split.join(""));
}
formatString(" abc   a aa  a a ");
formatString("yogendra  !")
