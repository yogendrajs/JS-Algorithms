function fractionReducing(fraction) {
    let sol = fraction[1] / fraction[0];
    if (sol % 1 === 0) {
        return [1, sol];
    }
    return fraction;
}

console.log(fractionReducing([4, 6]));
