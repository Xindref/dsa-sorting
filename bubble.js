function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const swapHolder = arr[j]
                arr[j] = arr[i];
                arr[i] = swapHolder;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;