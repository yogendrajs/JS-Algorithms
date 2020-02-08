// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
	if (y1 < y2) return 0;
	if (y1 > y2) {
		return 10000;
	}
	if (m1 < m2) return 0;
	if (m1 > m2) {
		return (m1-m2)*500
	}
	if (d1 > d2) {
		return (d1-d2)*15;
	}
	return 0;
}

libraryFine(9, 6, 2015, 6, 6, 2015);