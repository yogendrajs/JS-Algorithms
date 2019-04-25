// function titleCase(str) {
//   var lower = str.toLowerCase();
//   var newStr = "";
//   var count = 1;
//   for (var i = 0; i < lower.length; i++){
//     if (lower[i] == " "){
//       newStr += " ";
//       i++;
//       count = 1;
//     }if (count == 1){
//       var d = lower[i].toUpperCase();
//       newStr += d;
//       count++;
//     }
//     else {
//       newStr += lower[i];
//     }
//   }return newStr;
// }
//
// titleCase("I'm a little tea pot");
//================================
function titleCase(str) {
  var c=str.toLowerCase();
  var b = c.split(' ');
  var s="";
  for (var i=0;i<b.length;i++){
    var a=b[i].slice(0,1).toUpperCase();
    var s=s+a+b[i].slice(1)+" ";
  }
  // return s.slice(0,s.length-1);
}

titleCase("sHoRt AnD sToUt");

