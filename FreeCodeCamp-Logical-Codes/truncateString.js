function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newData = "";
  if (num < str.length){
  for (var i = 0; i < num; i++){
    newData += str[i];
  }
  return newData+"...";
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Absolutely Longer", 2)
