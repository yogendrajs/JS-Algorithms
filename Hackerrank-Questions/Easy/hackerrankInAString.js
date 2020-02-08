// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    let org = "hackerrank";
    for (let i = 0; i < org.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (org[i] === s[j]) {
                org = org.slice(i + 1);
                s = s.slice(j + 1);
                j = -1;
            }
        }
        if (org.length > 0) {
            console.log("NO");
            break;
        } else console.log("YES");
    }
}

hackerrankInString("haacckkerrank");
hackerrankInString('hackerworld')
hackerrankInString('hereiamstackerrank')