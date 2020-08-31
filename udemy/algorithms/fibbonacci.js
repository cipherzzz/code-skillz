
// fibbonacci sequence
// the number to the right is the sum of the previous two
// 0 1 1 2 3 5 8 13 21
// calculate the fibbonacci sequence value for number n

function fibbonacciIterative(num) {
    
    if(num < 2) {
        return num
    }
    
    let addend1 = 1
    let addend2 = 1
    for(let i=3; i<=num; i++) {
        let newItem = addend1+addend2
        addend1 = addend2
        addend2 = newItem
    }
    
    return addend2
}


//fibbonacciRecursive()
function fibbonacciRecursive(num) {
    
    // because index 1 and 2 are both 1 - little tweak
    if(num < 2) {
        return num
    }
    
    // next sequence is the sum of the previous two items
    return fibbonacciRecursive(num-2) + fibbonacciRecursive(num-1)
    
}

console.log(fibbonacciIterative(7))
console.log(fibbonacciRecursive(7))