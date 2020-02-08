// Complete the angryProfessor function below.
function angryProfessor(k, a) {
	let onTime = 0, away = 0;
	for (let i of a) {
		if (i <= 0) {
			onTime++;
		} else away++;
	}
	console.log(onTime);
	if (onTime >= k) {
		console.log('NO')
		return;
	} console.log('YES')
}
angryProfessor(5, [-1, -1, 0, 0, 1, 1,-1,-1]);
