// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");

    // first way
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
    		if (s1[i] === s2[j]) {
    			s1.splice(i, 1);
    			s2.splice(j, 1);
    			j = -1;
    		}
    	}
    }
    console.log(s1.length+s2.length);

    // second way (not ready yet)
    // let d = 0;
    // for (let i = 0; i < s1.length; i++) {
    //     let index = s2.indexOf(s1[i]);
    //     if (index != -1) {
	// 		s1 = s1.slice(0, i) + s1.slice(i+1);
    //         s2 = s2.slice(0, index) + s2.slice(index + 1);
    //         d++;
    //     }
    // }
    // console.log(s1, s2.length, d);
}

// makingAnagrams("bacdc", "dcbad");
makingAnagrams('abc', 'amnop');
makingAnagrams('cde', 'abc')
