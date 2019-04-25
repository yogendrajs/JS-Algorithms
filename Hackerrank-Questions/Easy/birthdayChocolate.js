// function birthday(d, m){
//   // var arr = [1, 2, 1, 3, 2];
//   var arr = [4];
//   var count = 0;
//   for (var i = 0; i < arr.length; i++){
//     var j = i+1;
//     if (arr[i] == d){count++;}
//     if (arr[i] + arr[j] == d){
//       count++;
//     }
//   }console.log(count);
// }
// birthday(4,1);

function truncate(string, num){
  if (string.length == num){
    console.log(string);
  }else {
    console.log(string.slice(0, num) + "...");
  }
}
truncate("A-tisket a-tisket A green and yellow basket", "A-tisket a-tisket A green and yellow basket".length);
