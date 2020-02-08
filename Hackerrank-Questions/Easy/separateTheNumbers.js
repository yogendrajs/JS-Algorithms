// Complete the separateNumbers function below.
function separateNumbers(s) {
    for (let i = 1; i < s.length; i++) {
        let a = parseInt(s.slice(0, i));
        let counter = 0;
        for (j = i; j < s.length; j += String(a).length) {
            let b = String(a + 1);
            if (s.slice(j, j + b.length) != b) {
                counter++;
                break;
            }
            // j += b.length;
            a = parseInt(b);
        }
        if (counter === 0) {
            console.log("YES", s.slice(0, i));
            return;
        }
    }
    console.log("NO");
}

separateNumbers("78910");
separateNumbers("121314");
separateNumbers("91011");
separateNumbers("99100");
separateNumbers("99910001001");
separateNumbers("65651460403999656565146040399966");
separateNumbers("84137510565804148413751056580415");