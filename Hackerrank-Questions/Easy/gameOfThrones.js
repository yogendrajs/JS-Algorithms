// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    let even = s.length % 2 === 0;
    let set = [...new Set(s)].join('');
    // console.log(set);
    let dic = {};
    if (even) {
        for (let i = 0; i < s.length; i++) {
            dic[s[i]] = dic[s[i]] + 1 || 1;
        }
        // console.log(dic);
        let final = Object.values(dic).filter(even => even%2 === 0);
        // console.log(final);
        if (final.length === set.length) {
            console.log("Yes");
        } else console.log("No");
    } else {
        for (let i = 0; i < s.length; i++) {
            dic[s[i]] = dic[s[i]] + 1 || 1;
        }
        // console.log(dic);
        let final = Object.values(dic);
		let f = final.filter(odd => odd%2 !== 0);
		// console.log(f);

        if (f.length === 1) {
            console.log("Yes");
        } else console.log("No");
    }
}

gameOfThrones("aaabbbb");
gameOfThrones("aabbccdddd");
gameOfThrones('cdefghmnopqrstuvw');
gameOfThrones('cdcdcdcdeeeef');