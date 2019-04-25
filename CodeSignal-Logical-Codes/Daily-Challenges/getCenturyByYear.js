function getCenturyByYear(year){
  var count = 1;
  centuryArr = [];
  while (count < year+100){
    centuryArr.push(count);
    count+=100;
  }
  // console.log(centuryArr)
  var centuryCount = 0;
  for (var i = 0; i < centuryArr.length; i++){
    if (year >= centuryArr[i]){
      centuryCount++;
    }
  }console.log('year', year, 'comes in', centuryCount+'th', 'century');
}
getCenturyByYear(2019)
