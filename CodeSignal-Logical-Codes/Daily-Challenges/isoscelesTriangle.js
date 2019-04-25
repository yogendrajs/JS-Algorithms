//Given length of a triangle sides, check if it is isosceles.
function isoscelesTriangle(sides) {
  for (var i = 0; i < sides.length; i++){
    var count = 0;
    for (var j = 0; j < sides.length; j++){
      if (sides[i] == sides[j]){
        count++;
      }
    }if (count > 1){
      return (true);
    }
  }return (false);
}

console.log(isoscelesTriangle([5, 3, 5]));
console.log(isoscelesTriangle([4, 3, 2]));
