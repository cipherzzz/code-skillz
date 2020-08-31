// 70. Climbing Stairs
// Easy

// 4762

// 153

// Add to List

// Share
// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

// ways(n) = ways(n-1) + ways(n-2)
// use memoization to save stored tree calcs
                      
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let countVariations = function(remainingStairs, variationCache) {
        // this indicates that we have reached a solution - so increment the variation count
        if(remainingStairs == 0) {
            return 1
        }
        
        // this indicates that we have NOT reached a valid solution - so do not increment the variation count
        if(remainingStairs < 0) {
            return 0
        }
        
        //this is the meat and potatoes of the solution
        if(variationCache[remainingStairs]) {
            return variationCache[remainingStairs]
        } else {                              // left side                                          // right side    
            variationCache[remainingStairs] = countVariations(remainingStairs-1, variationCache) + countVariations(remainingStairs-2, variationCache)
            return variationCache[remainingStairs]
        }
    } 
    return countVariations(n, {})
};

console.log(climbStairs(5))