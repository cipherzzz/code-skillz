const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    
    let sortedIndex = 0
    while(sortedIndex < array.length) {
        
        let least = {index: sortedIndex, value: array[sortedIndex]}
        
        for(let i=sortedIndex; i<array.length; i++) {
            if(array[i] < least.value) {
                least = {index: i, value: array[i]}
            } 
        }
        
        let currentIndexValue = array[sortedIndex]
        array[sortedIndex] = least.value // put the lowest value 
        array[least.index] = currentIndexValue // swap out value
        sortedIndex++
    }
    
    return array
}

console.log(selectionSort(numbers));
console.log(numbers);