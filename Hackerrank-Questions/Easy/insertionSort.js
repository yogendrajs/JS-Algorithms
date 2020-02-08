var insertionSort = function(arr) {
    var i, j, key;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    console.log(arr);
};

var a = [5, 11, 7, 15, 3, 1];
var b = [2, 4, 6, 8, 3];
insertionSort(b);
