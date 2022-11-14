function sortString(input) {
    let arr = input.split('');
    let sortedIndex = 0;
    let length = arr.length;
    while(sortedIndex < length) {
        let currentValue = arr[sortedIndex]
        let nextValue = arr[sortedIndex + 1];
        let comparison = currentValue.localeCompare(nextValue); // should be 0 if equal -1 if less 1 if greater
        
        if(comparison > 0) {
            arr[sortedIndex] = nextValue;
            arr[sortedIndex + 1] = currentValue;
        }
        sortedIndex++;
    }
    return arr.join('');
}

console.log(sortString("ba"));