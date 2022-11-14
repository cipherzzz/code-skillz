// x(n) = x(n-1) + x(n-2)
// 0 1 2 3 4 5 6 7 8 9 10
// 0 1 1 2 3 5 8 13 21 34


// recursive
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

function fibonacci(n) {
    let seq = [0, 1]
    for(let i=2; i<=n; i++) {
        seq.push(seq[i-1] + seq[i-2]);
    }
    return seq[n];
}

console.log(fibonacci(9))