function migratoryBirds(arr) {
    // let dic = {}
    // for (let i of arr) {
    // 	if (dic[i] === undefined) {
    // 		dic[i] = 1;
    // 	}
    // 	else {
    // 		dic[i]++;
    // 	}
    // }
    // console.log(dic)
    // let max = 0;
    // for (let i in dic) {
    // 	console.log(i);
    // 	if (max < dic[i]) {
    // 		max = i;
    // 	}
    // }
    // console.log(max);

    // passed case//////////////////////////

    let dupl = [];
    let dict = {};
    arr = arr.sort((a, b) => a-b);
    let max = 0;
    let re = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        if (!dupl.includes(arr[i])) {
            dupl.push(arr[i]);
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                }
            }
            dict[arr[i]] = count;
            if (max < count) {
                max = count;
                re = arr[i];
            }
        }
    }
    console.log(dict, re);
    return re;

    
}

migratoryBirds([1, 4, 4, 4, 5, 3]);
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
