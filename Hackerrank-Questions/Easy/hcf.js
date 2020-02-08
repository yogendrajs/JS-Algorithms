function hcf(...a) {
    let min = Math.min(...a);
    let max = 0;
    for (let i = 2; i < min; i++) {
        let count = 0;
        for (let j of a) {
            if (j % i === 0) {
                count++;
            }
        }
        if (count === a.length && max < i) {
            max = i;
        }
    }
    console.log(max);
}

hcf(72, 126);
hcf(98, 56);
hcf(24, 36);
hcf(18, 12);
hcf(15, 30, 90);
hcf(16, 24);
hcf(28, 42);
hcf(60, 150);
hcf(27, 36);
hcf(24, 60, 112);
hcf(120, 144, 160);
hcf(72, 126, 270);
hcf(70, 84, 336, 1260);
hcf(72, 126, 168);
hcf(96, 528, 2160, 3520);