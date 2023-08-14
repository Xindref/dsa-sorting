function merge(arr1, arr2) {
    let outputArr = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            outputArr.push(arr1[pointer1]);
            pointer1++;
        } else {
            outputArr.push(arr2[pointer2]);
            pointer2++;
        }
    }

    while (pointer1 < arr1.length) {
        outputArr.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        outputArr.push(arr2[pointer2]);
        pointer2++;
    }

    return outputArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

module.exports = { merge, mergeSort };