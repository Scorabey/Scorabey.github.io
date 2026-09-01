const BubbleSort = (arr) => {
    for(let i = 0; i < array.length; i++) {
        console.log(`Vector: start iteration for: ${array}`);
        console.log(`-------------------------------------`)
        for(let j = 0; j < (array.length - i - 1); j++) {
            if(array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;

                console.log(`Matrix: array: ${array}, Swaped item: ${array[j + 1]}`);
            }
        }
        console.log(`-------------------------------------`)
    }

    return array;
}

const array = [234, 43, 55, 63, 5, 6, 235, 547];

console.log(BubbleSort(array));