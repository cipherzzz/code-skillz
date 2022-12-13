

// for {1, 2} step options
// n=1 [[0,1]]
// n=2 [[0,1,2], [0, 2]]
// n=3 [[0,1,2,3], [0,2,3], [0,1,3]]
// n=4 [[0,1,2,3,4], [0,2,3,4], [0,1,3,4], [0,1,2,4], [0,2,4]]
// f(n) = f(n-2) + f(n-1)


// recursive
const waysToClimb = (totalStairs: number, cache: number[]): number => {
    // can only climb 1 or 2 stairs at a time
    // we travel to the root before returning
    if(totalStairs <= 3) {
        cache[totalStairs] = totalStairs
        return totalStairs
    }

    let permutations = cache[totalStairs]
    if(permutations) {
        return permutations
    }
    else {
        return waysToClimb(totalStairs-2, cache) + waysToClimb(totalStairs-1, cache)
    }
}

//recursive with memoization

const cache: number[] = []
console.log(waysToClimb(4, []))



// iterative
const waysToClimbIterative = (totalStairs: number): number => {
    const cache: number[] = [0, 1, 2, 3]
    for(let i = 4; i <= totalStairs; i++) {
        cache[i] = cache[i-2] + cache[i-1]
    }
    return cache[totalStairs]
}
