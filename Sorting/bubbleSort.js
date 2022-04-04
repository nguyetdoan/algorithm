function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let swap = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swap ++;
            }
        }
        if (swap === 0) break;
    }

    return arr;
}

// Time Complexity n^2