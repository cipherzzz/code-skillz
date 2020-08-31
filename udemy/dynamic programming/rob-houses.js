// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

// Algo
// houses: [1, 2, 3, 1]
// max:    [1, 2, 4, 4]
// max[i] = max(houses[i-1], houses[i]+houses(i-2))
//
// edge: []: max=0, [n]: max=n, [n1, n2]: max = math.max(n1,n2), [n1, n2, n2,....]: max[i] = max(houses[i-1], houses[i]+houses(i-2))
    

// assuming that we do not have null values in the inputs
function rob(houses) {
    let max = []
    if(!houses || houses.length == 0) {
        return 0
    }
    
    if(houses.length == 1) {
        return houses[0]
    }

    
    max[0] = houses[0]
    max[1] = Math.max(houses[0], houses[1])
    
    for(let i=2; i<houses.length; i++) {
        max[i] = Math.max(max[i-1], houses[i]+max[i-2])
    }
    return max[max.length-1]
}

const houses = [1]
console.log(rob(houses))