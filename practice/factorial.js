function factorial(n) {
    if(n == 0) {
        return 1
    }

    return n*factorial(n-1)
}


function factorialIterative(n) {
    let sum = 1
    for(let i=n; i>0; i--) {
        sum = i*sum
    }
    return sum
}
console.log(factorialIterative(5))