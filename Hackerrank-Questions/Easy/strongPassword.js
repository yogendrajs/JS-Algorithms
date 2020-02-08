// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let lower = new RegExp("^(?=.*[a-z])");
    let upper = new RegExp("^(?=.*[A-Z])");
    let number = new RegExp("^(?=.*[0-9])");
    let special = new RegExp("^(?=.*[-!@#$%^&*()+])");
    // let len = new RegExp("^(?=.{6,})");
    let count = 0;

    if (!lower.test(password)) {
        count++;
    }
    if (!upper.test(password)) {
        count++;
    }
    if (!number.test(password)) {
        count++;
    }
    if (!special.test(password)) {
        count++;
	}
	// if ((count + password.length) < 6) {
	// 	count = 6 + password.length;
	// }

    // console.log(count);
    console.log(Math.max(count, 6 - n));
}

minimumNumber(7, "AUzs-nV");
minimumNumber(11, "Hackerrank");
minimumNumber(3, "Ab1");
minimumNumber(4, 1400);