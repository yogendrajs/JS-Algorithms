function timeConversion(s) {
    /*
     * Write your code here.
     */
    let meridian = s.slice(-2);

    if (meridian === 'AM' && parseInt(s.slice(0, 2)) === 12) {
        console.log ('00' + s.slice(2, -2));
    }
    if (meridian === 'PM' && parseInt(s.slice(0, 2)) < 12) {
        console.log (parseInt(s.slice(0, 2)) + 12 + s.slice(2, -2));
    }
    console.log (s.slice(0, -2));
}

timeConversion('07:05:45AM');
timeConversion('01:01:00AM');
timeConversion('01:10:00PM');
timeConversion('23:32:25PM');
timeConversion('12:40:22AM');
timeConversion('12:00:00AM');