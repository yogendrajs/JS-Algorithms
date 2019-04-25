// For n = 1111, the output should be
// sameDigitNumber(n) = true;

function sameDigitNumber(n) {
    var n = String(n).split("");
    var start = n[0];
    for (var i of n){
        if (i != start){
            return false
        }
    }return true;
}
