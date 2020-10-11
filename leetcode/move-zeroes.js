// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// algo
// iterator over the nums
// keep an index that excludes all the zeroes - ie. only increment it for non-zero numbers
// we can use this index to overwrite the zero indexes 
// if we have zeroes in our array, this index will be less than the nums.length by the number of zeros
// we can simply replace that many nums with zeroes at the end and the resulting array is our answer
// ie. [0, 1, 2, 3, 0, 9]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }
    
    for(let i=nonZeroIndex; i<nums.length; i++) {
        nums[i] = 0
    }
    
    return nums
};


console.log(moveZeroes([0,1,0,3,12]))