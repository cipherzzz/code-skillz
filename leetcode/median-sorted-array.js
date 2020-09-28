// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000
// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Brute
// combine arrays & sort and find median

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let concatted = nums1.concat(nums2)
    let nums = sort(concatted)
    let length = nums.length
    let mid = Math.floor(length/2)
    let median = length%2!=0?nums[mid]:(nums[mid-1]+nums[mid])/2
    return median
};

function sort(nums) {
    return nums.sort((a,b)=>{return a-b})
}

function bubbleSort(nums) {
    let sortedCount = 0
    while(sortedCount < nums.length-1-sortedCount) {
        for(let j=1; j<nums.length; j++) {
            if(nums[j]>nums[j+1]) {
                let replaced = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = replaced
            }
        }
        sortedCount++
    }
    return nums
}

let nums1 = [-1,-2], nums2 = [1]
console.log(findMedianSortedArrays(nums1, nums2)) // expect -1

// nums1 = [1,3], nums2 = [2]
// console.log(findMedianSortedArrays(nums1, nums2)) // expect 2

//  nums1 = [1,2], nums2 = [3,4]
// console.log(findMedianSortedArrays(nums1, nums2)) // expect 2.5

// nums1 = [], nums2 = [1]
// console.log(findMedianSortedArrays(nums1, nums2)) // expect 1

// nums1 = [2], nums2 = []
// console.log(findMedianSortedArrays(nums1, nums2)) // expect 2

// nums1 = [0], nums2 = [0]
// console.log(findMedianSortedArrays(nums1, nums2)) // expect 2
