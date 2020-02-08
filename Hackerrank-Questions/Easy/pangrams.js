// Complete the pangrams function below.
function pangrams(s) {
	let arr = new Array();
	s = s.toLowerCase().split(' ').join('');
	for (let i of s) {
		if (!arr.includes(i)) {
			arr.push(i);
		}
	}
	// console.log(arr, arr.length)
	if (arr.length === 26) {
		console.log('pangram!');
	} else console.log('not pangram!');
}

// pangrams('We promptly judged antique ivory buckles for the next prize');
pangrams('uIClDDH eBs mSL WXNKJ whnDMS xQDtDlEvJSFfXjAUn uB Nb xS oJNxsRwDboYXz gTjaHoPGrW eLUIHqYdwvTxXdhh nubnZ RvEKaglFnfCgpbdEKoGiKKp EiJJOJePbZIzwvViZOolMn k XHKZSZ C pnfoIQnJznckCwXdmhn Twus xrcFOaNHyisI csGwqQGSVhhVpCnnd kzwViEVDyREYkgyEhXWFrht q DbrLLnNOzuiUibW YHJRDrXJK rXd ezuABu soToNZGssfqpSe FRZMqrNQmkQAWwAHzIy Uik JwLJJDpLPcX jNn neguK RViE wTYMOLDSQaPlKXAjbWzHvgOlaxyxy qQbO GgKaO x lEEpzhopEYApg tcnxQMI FxjclEzttcdTXAxUNWiORidNFIVTaOhSeFHeCEpEiJMEgSI ZHxTbqpZmEo tgmyJyUQeOSWZWhHmnU KlvUNaKXZ WvyRQsOnzP');
