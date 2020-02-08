let a = [32, 12, 19, 29, 23, 27];

function binaryEase(find, left, right, array) {
    let mid = Math.floor((left+right)/2);
    if (left <= right) {
        if (array[mid] === find) {
            return mid;
        }
        else if (find < array[mid]) {
            right = mid-1;
        } else if (find > array[mid]) {
            left = mid+1;
        }
        return binaryEase(find, left, right, array);
    }
    return -1;

    
}

let array = a.sort((x, y) => x-y);
console.log(array);
console.log(binaryEase(19, 0, array.length, array));