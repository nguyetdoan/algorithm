function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            [arr[i], arr[smallest]]  = [arr[smallest], arr[i]];
        }
    }
    return arr;
}

// Similar to bubble sort, but instead of first placing large values into sorted position,
// it places small values into sorted position.
