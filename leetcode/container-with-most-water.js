// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

 



// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// Algo
// brute force way - do a nested for loop and keep looking for the largest amount
// O(N^2)
// O(N)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaBrute = function(height) {
    if(!height || height.length == 0) {
        return 0
    }
    
    let max = 0
    for(let i=0; i< height.length; i++) {
        for(let j=i+1; j<height.length; j++) {
            let waterHeight = Math.min(height[i], height[j])
            let width = j-i
            max = Math.max(max, waterHeight*width)
        }
    }
    return max
};


// Algo
// var: left, right, max
// while loop(left<right)
//    min = min of height[left] and height right
//    set max equal to max(max, min*(right-left))
//.   take the smaller of the heights and move towards the center to try and find a higher one
// return max
// O(n) memory
/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaOptimized = function(height) {
    if(!height || height.length == 0) {
        return 0
    }
    
    let left = 0
    let right = height.length-1
    let max = 0
    while(left<right) {
        let min = Math.min(height[left], height[right])
        max = Math.max(max, min*(right-left))
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
}

let heights = [1,8,6,2,5,4,8,3,7]
console.log(maxAreaBrute(heights))
console.log(maxAreaOptimized(heights))