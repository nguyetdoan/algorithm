// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contigous subarray of
// which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

function minSubArrayLen (arr, target) {
    let currentTotal = arr[0];
    let minLength = Infinity;
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        if (currentTotal < target) {
            j++;
            currentTotal = currentTotal + arr[j];
        } else {
            currentTotal = currentTotal - arr[i];
            if (j - i + 1 < minLength) minLength = j - i + 1;
            i++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}