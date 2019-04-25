//====================================
function howManySundays(n, startDay) {
    // var n = 7;
    var p = 0;
    // var startDay = 'Sunday';
    var sundayArr = [];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    indexOfDay = days.indexOf(startDay)
    console.log(indexOfDay);
    for (var i = indexOfDay+1; p < n; i++){
        if (i > 6){
          i = 0;
        }
      sundayArr.push(days[i]);
      p++;
    }
    console.log(sundayArr);
    var counter = 0;
    for (var i = 0; i < sundayArr.length; i++){
      if (sundayArr[i] == 'Sunday'){
        counter++;
      }
  }
    return counter;
}
console.log(howManySundays(6,'Monday'));
console.log(howManySundays(9,'Saturday'));
