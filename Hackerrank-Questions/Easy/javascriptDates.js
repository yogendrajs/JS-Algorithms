var date = "10/11/2010"; // the date format is DD/MM/YYYY here
var date1 = date.split("/");
///---------------------------------------
// if the date format is MM/DD/YYYY
// var swap1 = date1[0];
// date1[0] = date1[1];
// date1[1] = swap1;
//----------------------------------------
var monthsArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var yearsArr = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dateName = yearsArr[parseInt(date1[1])];
date1.splice(1, 1, dateName);

var newDate = date1.join(" ");
var d = new Date(newDate);

var day = d.getDay();
console.log(day);
console.log(monthsArr[day]);
