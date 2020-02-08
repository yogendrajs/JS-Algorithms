
function taumBday(b, w, bc, wc, z) {
	// Write your code here
	if (bc > wc && (wc+z) < bc) return b*wc+w*wc+b*z;
	if (wc > bc && (bc+z) < wc) return b*bc+w*bc+w*z;
	return b*bc+w*wc;
}
taumBday(3, 6, 9, 1, 1);
taumBday(3, 3, 1, 9, 2);
taumBday(7, 7, 4, 2, 1);
taumBday(10, 10, 1, 1, 1);
taumBday(5, 9, 2, 3, 4);
taumBday(3, 5, 3, 4, 1);

// 3 6
// 9 1 1

// const BigNumber = require('bignumber.js')

// function taumBday (b, w, bc, wc, z) {
//     [b, w, bc, wc, z] = [...arguments].map(x => new BigNumber(x))
//     let tbc = BigNumber.min( b.times(bc), b.times(wc).plus(b.times(z)) )
//     let twc = BigNumber.min( w.times(wc), w.times(bc).plus(w.times(z)) )
//     return tbc.plus(twc).toFixed()
// }

