
// Recursive solution for factorial
// 1. Identify the base case or break condition
// 2. Identify the recursive case
// 3. return them both
function recursiveFibbonacci(num) {
    
    if(num == 0) {
        return 1
    }
    
    return num*recursiveFibbonacci(num-1)
}


function iterativeFibbonacci(num) {
    let sum = 1
    for(let i=num; i>0; i--) {
        sum=i*sum
    }
    return sum
}


console.log(recursiveFibbonacci(10))
console.log(iterativeFibbonacci(10))