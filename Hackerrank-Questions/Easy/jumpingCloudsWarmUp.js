// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
	let count = 0, i = 0;
	while (i < c.length) {
		if (c[i+2] === 0) {
			count++;
			i+=1;
		} else if (c[i+1] === 0) {
			count++;
		}
		i++;
	}
	console.log(count);
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])