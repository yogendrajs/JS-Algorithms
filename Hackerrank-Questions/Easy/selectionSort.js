var swap = function(arr, i, min) {
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
};

var selectionSort = function(arr) {
    var min = 0,
        n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        min = i;

        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        swap(arr, i, min);
    }
    console.log(arr);
};

let a = [12, 23, 9, 18];
selectionSort(a);
