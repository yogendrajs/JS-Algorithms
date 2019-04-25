// quadratic equation = ax2 + bx + c = 0
// x = (-b +- sq(b2 - 4ac))/2a
function sortNumber(a, b){
  return a-b;
}

function quadraticEquation(a, b, c) {
  var arr = [];
  var data = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
  var data1 = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);


  if (!arr.includes(data)){
    if (!Number.isNaN(data)){
      arr.push(data);
    }
  }if (!arr.includes(data1)){
    if (!Number.isNaN(data1)){
      arr.push(data1);
    }
  }
  console.log(arr.sort(sortNumber));
}
quadraticEquation(1, -3, 2);
