// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-2147483647]
// Output: -2147483647


// Constraints:

// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1

// greedy
// keep track of our current sum
// keep track of our maxSum
// iterate of the nums and take the max of either the current number or the currentsum + number
// if the current number is greater than the currentsum+number than we would take that ie. -6 + 1. the number one is greater than the sum
// we then check it the currentSum is greater than the maxsum and replace maxsum if so
// return maxsum


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = null
    let maxSum = null

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (currentSum == null && maxSum==null) {
            currentSum = num
            maxSum = num
            continue
        }

        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
};

let nums = [-1,0,-2]
console.log(maxSubArray(nums))
