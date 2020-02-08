let year = 1918;

if (year === 1918) {
	console.log('26.09.1918');
}

else if (year < 1918) {
	if (year % 4 === 0) {
		console.log('12.09.' + year);
	} else console.log('13.09.' + year);
}
else if (year > 1918) {
	if (year% 4 === 0 && year% 100 !== 0 || year%100 === 0 && year% 400 === 0) {
		console.log('12.09.' + year);
	} else console.log('13.09.' + year);
}
