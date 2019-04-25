// https://www.hackerrank.com/challenges/grading/problem
// var arr = [73, 67, 38, 33];
var arr = [
80,
96,
18,
73,
78,
60,
60,
15,
45,
15,
10,
5,
46,
87,
33,
60,
14,
71,
65,
2,
5,
97,
0];
var push = [];
for (var i = 0; i < arr.length; i++){
  if (arr[i] >= 38){
    var next;
    for(var j = arr[i];; j++){
      if (j%5 == 0){
        if (j-arr[i] < 3){
          push.push(j);
        }else {
          push.push(arr[i]);
        }
        break;
      }
    }
  }else {
    push.push(arr[i]);
  }
}
console.log(push);
