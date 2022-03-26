// Given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to the function is located. 
// If the value is not found, return -1

function search(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (arr[middle] === target) return middle;
        else if (arr[middle] > target) min = middle;
        else if (arr[middle] < target) max = middle;
    }
    return -1;
}