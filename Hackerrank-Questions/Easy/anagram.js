// Complete the anagram function below.
function anagram(s) {
    let even = s.length % 2 === 0;
    if (even) {
        let firstHalf = s.slice(0, s.length / 2).split("");
        let secondHalf = s.slice(s.length / 2).split("");
        // console.log(firstHalf, secondHalf);
        // let z = firstHalf.filter(s => !secondHalf.includes(s));
        // console.log(z);

        // for (let i = 0; i < firstHalf.length; i++) {
        // 	for (let j = 0; j < secondHalf.length; j++) {
        // 		if (firstHalf[i] === secondHalf[j]) {
        // 			firstHalf.splice(i, 1);
        // 			secondHalf.splice(j, 1);
        // 			j = -1;
        // 		}
        // 	}
        // }
        
        // second way
        if (s.length % 2 !== 0) {
            return -1;
        }
        for (let i = 0; i < secondHalf.length; i++) {
			let index = firstHalf.indexOf(secondHalf[i]);

			if (index !== -1) {
				firstHalf.splice(index, 1);
			}
		}
		console.log(firstHalf);
		return;
    }
    console.log(-1);
}

anagram("aaabbb");
anagram("ab");
// anagram("abc");
anagram("mnop");
// anagram("xyyx");
// anagram("xaxbbbxx");
// anagram("abccde");
anagram("fdhlvosfpafhalll");
// anagram("asdfjoieufoa");
// anagram("mvdalvkiopaufl");

// fdhlvosf pafhalll
// dhlvosf pahalll
// dlvosf paalll
// dvosf paall
