// Write a function called binarySearch which accepts a sorted array and a value
// and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, search){
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        if (arr[middle] === search) return middle;
        else if (arr[middle] < search) start = middle + 1;
        else end = middle - 1;
    }
    return -1;
  }