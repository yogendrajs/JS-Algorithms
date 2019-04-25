// For maxLength = 4 and
// text = "The Fox asked the stork, 'How is the soup?'",
// the output should be
// timedReading(maxLength, text) = 7.
// The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".

function timedReading(maxLength, text) {
  var total = 0;
  var alphabets26 = 'abcdefghijklmnopqrstuvwxyz';
    var list = text.split(" ");
    for (var i of list){
      var count = 0;
      i = i.toLowerCase();
      var counter = 0;
      for (var j = 0; j < i.length; j++){
        for (var k = 0; k < alphabets26.length; k++){
          if (i[j] == alphabets26[k]){
            counter++;
            break;
          }
        }
        if (counter > count){
          count = counter;}
      }if (count <= maxLength && count > 0){
        total++;
      }
    }return(total);
}
console.log(timedReading(4, "The", "Fox", "the", "How", "is", "the", "soup"));
