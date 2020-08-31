const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    
    let sortedCount = 0
    while(sortedCount < numbers.length) {
        for(let i=0; i< numbers.length-1-sortedCount; i++) {
            if(numbers[i] > numbers[i+1]) {
                let first = numbers[i]
                numbers[i] = numbers[i+1]
                numbers[i+1] = first
            }
        }
        sortedCount++
    }
}

bubbleSort(numbers);
console.log(numbers);