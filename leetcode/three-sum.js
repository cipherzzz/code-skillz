// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Algo
// brute force triple nested loop



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBad = function(nums) {
    let results = new Map()
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let combo = [nums[i], nums[j], nums[k]]
                    combo.sort()
                    let key = combo.join('')
                    if (!results.get(key)) {
                        results.set(key, combo)
                    }
                }
            }
        }
    }
    return [...results.values()]
};

console.log(threeSumBad([-1,0,1,2,-1,-4]))


// Algo
// map
// Come up with a solution for two sums to equal the complement of the third item
// for nums items
//    three =  twoSum(nums, -num[i])
//.   if(!map.get(three))
//.   put it in there
// return map

function twoSum(nums, target) {
    const history = new Set()
    let results = []
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        
        // ignore numbers at same index
        if(currentNumber == -target) {
            continue
        }
        
        const desiredAddend = target - currentNumber
        if (history.has(desiredAddend)) {
            results.push([currentNumber, desiredAddend])
        }
        else {
            history.add(currentNumber)
        }
    }
    return results
};

var threeSumBetter = function(nums) {
    
    nums.sort()
    if(nums[0] == 0 && nums[nums.length-1] == 0 && nums.length >=3)
    {
        return [0,0,0]
    }
    
    let threeNums = new Map()
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let twoNums = twoSum(nums, -current) //because we want to sum to 0
        twoNums.forEach((sums) => {
                sums.push(current)
                let sorted = sums.sort()
                let key = sorted.join(",")
                if (!threeNums.has(key)) {
                    threeNums.set(key, sorted)
                }
        })
    }
    return Array.from(threeNums.values())
}

// console.log(threeSumBetter([]))
// console.log(threeSumBetter([0]))
//console.log(threeSumBetter([0,0,0]))
//console.log(threeSumBetter([-1, 0, 1, 2, -1, -4]))
