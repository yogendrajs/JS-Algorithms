// https://www.hackerrank.com/challenges/the-time-in-words/problem?h_r=internal-search
var readline = require('readline-sync');
// var numberWords = require('number-to-words');

var h = (readline.question('Enter hours: '));
var m = (readline.question('Enter minutes: '));

var obj = {1: 'one', "2": 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty',
50: 'fifty', 60: 'sixty'};

if (m == 0){
  console.log(obj[h] + " o' clock");
}

else if (m == 30){
  console.log("half past " + obj[h]);
}
else if (m >= 1 && m < 30){
  if (m == 15){
    console.log("quarter past " + obj[h]);
  }else {
    if (m == 1){
      console.log(obj[m] + " minute past " + obj[h]);
    }else {
      if (m <= 20){
        console.log(obj[m] + " minutes past " + obj[h]);
      }else {
        m = String(m);
        var min1 = m[0]*10;
        var min2 = m[1];
        console.log(obj[min1] + " " + obj[min2] + " minutes past " + obj[h]);
      }
    }
  }
}
else if (m > 30){
  h++;
  if (m == 45){
    console.log("quarter to " + obj[h]);
  }else {
    m = 60-m;
    if (m <= 20){
      console.log(obj[m] + " minutes to " + obj[h]);
    }else {
      m = String(m);
      var min1 = m[0]*10;
      var min2 = m[1];
      console.log(obj[min1] + " " + obj[min2] + " minutes to " + obj[h]);
    }
  }
}
