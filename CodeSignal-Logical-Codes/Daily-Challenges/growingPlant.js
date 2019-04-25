// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
// growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

function growingPlant(upSpeed, downSpeed, desiredHeight){
  var i = 0, count = 0;
  while(i <= desiredHeight){
    i+=upSpeed;
    count++;
    if (i >= desiredHeight){
      console.log(count);
      break;
    }else {
      i-=downSpeed;
    }
  }
}
growingPlant(5, 2, 7);
