function climbingLeaderboard(scores, alice) {
    scores = [...new Set(scores)];
    let resultArr = [];
    for (let i = 0; i < alice.length; i++) {
        resultArr.push(binary(scores, alice[i], 0, scores.length-1))
	}
	console.log(resultArr);
}

function binary(scores, find, left, right) {
    let mid = Math.floor((left+right)/2);

    if (left > right) return left+1;
    // console.log(left, right);
    if (scores[mid] === find) return mid+1;
    if (scores[mid] > find) {
        return binary(scores, find, mid+1, right);
    }
    if (scores[mid] < find) {
        return binary(scores, find, left, mid-1);
    }
}

let scores1 = [100, 50, 40, 20, 10];
let alice1 = [5, 25, 50, 120];

let scores2 = [100, 90, 80];
let alice2 = [70, 80, 105];

let scores3 = [100, 90, 90, 80, 75, 60];
let alice3 = [50, 65, 77, 90, 102];

// let find = 105;

// console.log(binary(scores1, find, 0, scores1.length-1));
climbingLeaderboard(scores1, alice1);
climbingLeaderboard(scores2, alice2);
climbingLeaderboard(scores3, alice3);