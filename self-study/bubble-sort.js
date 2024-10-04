// JavaScript implementation of Bubble Sort
function bubbleSort(array) {
    let length = array.length;
    let swapped;
    for (let i = 0; i < length - 1; i++) {
        swapped = false;
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

function printArray(array) {
    console.log(array.join(" "));
}

let array = [64, 34, 25, 12, 22, 11, 90];

bubbleSort(array);
printArray(array);
