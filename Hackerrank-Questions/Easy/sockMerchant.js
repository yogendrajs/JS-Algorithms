// var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var ar = [1, 2, 1, 2, 1, 3, 2];
var count = 0;
for (var i = 0; i < ar.length; i++){
  for (var j = i+1; j < ar.length; j++){
    if (ar[i] == ar[j]){
      count++;
      ar.splice(j,1);
      ar.splice(i,1);
      i = -1;
      break;
    }
  }
}console.log(count);
