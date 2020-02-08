function checkVowelRegExp(s) {
	let re = new RegExp('^(?=.*[aeiou])');
	// return re.test(s) ? true: false;
	let a = s[0].match(re) ? true: false; 
	let b = s.slice(-1).match(re) ? true: false;
	
	return a && b;
}

console.log(checkVowelRegExp('abcdb'));