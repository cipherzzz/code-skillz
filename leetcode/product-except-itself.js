// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// Algo
// doing it in constant time by multiplying all the numbers together and dividing by the current index would be O(n)
// however we are not allowed to do that

// alernative
// iterate through the input list
// compute a product of all the items to the left of the current index
// compute a product of all the items to the right of the current index
// add those together excluding the current index value

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let result = []
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0, i)
        let right = nums.slice(i + 1, nums.length)

        let leftSum = left.reduce((product, mult)=>{return product*mult}, 1)
        let rightSum = right.reduce((product, mult)=>{return product*mult}, 1)
        
        result[i] =  leftSum * rightSum
    }
    return result
};

console.log(productExceptSelf([1,2,3,4]))
