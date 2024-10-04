function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let previousIndex = i - 1;
      
        while (previousIndex >= 0 && array[previousIndex] > currentElement) {
            array[previousIndex + 1] = array[previousIndex];
            previousIndex = previousIndex - 1;
        }
        array[previousIndex + 1] = currentElement;
    }
}

function printArray(array) {
    console.log(array.join(" "));
}

let array = [12, 11, 13, 5, 6];
insertionSort(array);
printArray(array);
