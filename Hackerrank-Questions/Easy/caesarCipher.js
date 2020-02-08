// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let originalStr = "abcdefghijklmnopqrstuvwxyz";

    for (;;) {
		if (originalStr.length >= k) {
			break;
		}
		else originalStr += originalStr;
	}

	let newStr = originalStr.slice(k) + originalStr.slice(0, k);
	console.log(originalStr.length, newStr);

    let finalStr = "";
    for (let i of s) {
		let index = originalStr.indexOf(i.toLowerCase());
        if (index > -1 && originalStr.includes(i.toLowerCase())) {
			let letter = newStr[index];
			if (i.toUpperCase() === i) {
				letter = letter.toUpperCase();
			}
            finalStr += letter;
        } else finalStr+=i;
    }
    console.log(finalStr);
}
caesarCipher("middle-Outz", 2);
caesarCipher("There's-a-starman-waiting-in-the-sky", 3);
caesarCipher("Pz-/aI/J`EvfthGH", 66);