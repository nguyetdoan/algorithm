// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maxium sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, l) {
    if (arr.length < l) return null;
    let currentTotal = 0;
    for (let i = 0; i < l; i++) {
        currentTotal += arr[i];
    }
    let maxSum = currentTotal;
    for (let j = l, i = 0; j < arr.length; j++, i++) {
        currentTotal = currentTotal - arr[i] + arr[j];
        maxSum = Math.max(currentTotal, maxSum);
    }
    return maxSum;
}