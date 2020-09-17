// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// Algo
// sort the array 
// init result with i=0, i=1, i=lenght-1
// then we an take two pointers
// for nums with i pointer - we go up until length-2
    // start a_pointer at i+1 and start b_pointer at num.length-1
    // add num[i] + num[a_pointer] +num[b_pointer] and store as sum
    // check if abs(sum-target) < abs(result-target) 
    // update the result=sum
//return result


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var threeSumClosest = function(nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length -1]
    nums.sort()
    for(let i=0; i<nums.length-2; i++) { //note that we will compare the last two in the loop so nums.length-2
        let a_ptr = i+1
        let b_ptr = nums.length-1
        while(a_ptr < b_ptr) {
            let sum = nums[i] + nums[a_ptr] + nums[b_ptr]
            
            //update the pointer
            if(sum < target) {
                a_ptr++
            } else {
                b_ptr--
            }
            
            // update the result if it's closer
            if(Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }
        }
    }
    
    
    return result
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))