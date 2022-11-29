// Combination of steps to climb stairs

// 1. Recursive solution
// 2. Memoization
// 3. Tabulation

// this is a dynamic programming problem because it can be broken down into subproblems
// and the subproblems can be reused
// the subproblems are the number of ways to climb the stairs
// the subproblems can be reused because the number of ways to climb the stairs is the same
// no matter how you get there


const climb = (n: number): number => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climb(n - 1) + climb(n - 2);
}

const climbMemo = (n: number, memo: number[] = []): number => {
    if (memo[n] !== undefined) return memo[n];
    if (n === 1) return 1;
    if (n === 2) return 2;
    memo[n] = climbMemo(n - 1, memo) + climbMemo(n - 2, memo);
    return memo[n];
}

const climbTab = (n: number): number => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 2;
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    console.log(table)
    return table[n];
}

console.log(climb(6));
console.log(climbMemo(6));
console.log(climbTab(6));
