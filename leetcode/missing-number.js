// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// Algo
// sort array
// check if next item is the item+1 value - if it's not then the missing item is item+1
// assumption - there is only one missing
// this is o(log(n)) since we are sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberMark = function(nums) {

    nums.sort()

    if (nums[nums.length - 1] != nums.length) {
        nums.length
    }
    else if (nums[0] != 0) {
        return 0
    }

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]
        let expectedNext = nums[i-1] + 1
        if (expectedNext != current) {
            return expectedNext
        }
    }
    
    return -1
};

// console.log(missingNumber([3,0,1]))
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
// console.log(missingNumber([0]))
// console.log(missingNumber([1]))
//console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8]))


// Algo
//[0,1,3] is missing an index - it should have a third - [0,1,2,3]
// the sum of the sequence should be the sum of all its elements - and in this case it's indexes are the same as the values contained
// since we know we are missing an element, we can use the length of the array as a missing index and then add the other indexes to it
// this will give us an ideal sum
// we can then compare this ideal sum with the actual sum of the sequence
// the difference will be the missing index

// we can simply subtract the missing sequence sum from the sum of the whole sequence to get our missing element/index
// This is O(n) time as it doesn't need to be sorted
// This is constant space

/**
 * @param {number[]} nums
 * @return {number}
 */ 0,1,2,3
var missingNumber = function(nums) {
    let idealSum = nums.length // This is our starting point and we will add all of the indexes to it
    let missingSum = 0 //This is the starting point for our missing sum - we will add the index values to this
    
    for(let i=0; i<nums.length; i++) {
        idealSum += i
        missingSum += nums[i]
    }
    
    return idealSum - missingSum
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0]))
console.log(missingNumber([1]))