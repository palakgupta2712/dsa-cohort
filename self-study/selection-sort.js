// JS implementation of selection sort
function selectionSort(array) {
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
    
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
}

function printArray(array) {
    console.log(array.join(" "));
}

const array1 = [64, 25, 12, 22, 11];
selectionSort(array1);
printArray(array1);
