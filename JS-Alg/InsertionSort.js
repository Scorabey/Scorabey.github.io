const InsertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > element) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = element;
    }

    return array
}

const array = [234, 43, 55, 63, 5, 6, 235, 547];

console.log(InsertionSort(array));