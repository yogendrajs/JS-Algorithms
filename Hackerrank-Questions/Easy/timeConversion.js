var readline = require('readline-sync');
var time = readline.question('Enter the time: ');
if (time.includes("AM")){
  var hour = time.slice(0,2);
  if (hour == "12"){
    console.log("00"+time.slice(2, -2));
  }else {
    console.log(time.slice(0, -2));
  }
}
else if (time.includes("PM")){
  var hour = time.slice(0,2);
  if (parseInt(hour) < 12){
    hour = parseInt(hour)+12;
    console.log(String(hour) + time.slice(2, -2));
  }else {
    console.log(time.slice(0, -2));
  }
}
