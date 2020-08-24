/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const history = {}
    for(let i=0; i<nums.length; i++) {
        const currentNumber = nums[i]
        const desiredAddend = history[target - currentNumber]
        if(desiredAddend) {
            return [desiredAddend.index, i]
        } else {
            history[currentNumber] = {index: i}
        }
    }
};


// Brute Force do a nested loop
// 2+7, 2+11, 2+15...
// 7+11, 7+15...
// O(n^2) time

//Better way 
// store the history of the numbers seen in a map
// check if the current number + a number already seen equals the sum
// O(n)

const addends = [2, 5, 6, 7, 11, 15]
const targetSum = 9
console.log(twoSum(addends, targetSum))