
// create a closure with an imbedded cache for dp
function fibonacci() {
    let cache = {}
    return function fib(n) {
        
        if(n < 2) {
            return n 
        }
        
        if(cache[n]) {
            return cache[n]
        } else {
            cache[n] = fib(n-2) + fib(n-1)
            return cache[n]
        }
    }
}

const memoizedFib = fibonacci()
console.log(memoizedFib(7))