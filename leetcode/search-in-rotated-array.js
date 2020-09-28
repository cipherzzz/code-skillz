// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.



// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1


// Constraints:

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is guranteed to be rotated at some pivot.
// -10^4 <= target <= 10^4


// brute force 
// iterate over the array and return the index that matches
//O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return modifiedBinarySearch(nums, target)
};

function bruteSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1
}

function modifiedBinarySearch(nums, target){
    
    //represents the inital midpoint for our modified binary search
    let smallestIndex = indexOfSmallestNumber(nums)
    
    let start = smallestIndex
    let left = 0
    let right = nums.length-1
    
    if(target >= nums[start] && target <= nums[right]) {
        left = start
    } else {
        right = start
    }
    
    while(left<right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == target) {
            left = mid
            break
        }
        
        if(target < nums[mid]) {
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return nums[left]==target?left:-1
}

function indexOfSmallestNumber(nums) {
    // find the smallest number's index - from there it's basically a modified bs
    let left = 0
    let right = nums.length-1
    while(left<right) {
        let mid = Math.floor((left+right)/2)
        
        if(nums[mid] > nums[right]) {
            left = mid+1
        } else {
            right = mid
        }
    }
    return left
}


function assert(value, expectation) {
    if (value == expectation) {
        console.log("Passed", "value:", value)
    }
    else {
        console.log("Failed", "value:", value, "expectation:", expectation)
    }
}

let nums, target

// nums = [0, 1, 2, 4, 5, 6, 7], target = 4
// assert(bruteSearch(nums, target), 3)
// assert(search(nums, target), 3)

nums = [3, 1, 2], target = 1
assert(search(nums, target), 1)
