function pivot(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[start];
    let swapIdx = start;
    
    for (let j = start + 1; j <= end; j++) {
        if (arr[j] < pivot) {
            swapIdx++
            [arr[j], arr[swapIdx]] = [arr[swapIdx], arr[j]];
        }
    }

    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}