// 42. Trapping Rain Water
// Hard

// 7863

// 130

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Algo
// - traverse the array and find the max height across from left to right and store in an array
//   ie.  [0,1,1,2,2,2,2,3,3,3,3,3]
// - traverse the array and find the max height across from right to left and store in an array
//   ie.  [3,3,3,3,3,3,3,3,2,2,2,1]
// - once you have these arrays, take the minimum value of the two as the water would only rise up to that max
//   ie.  [0,1,1,2,2,2,2,3,2,2,2,1]
// - finally, the height of the structure at the index will displace any water so subtract the height index from the above array
//   ie.  [0,1,1,2,2,2,2,3,2,2,2,1]
//      - [0,1,0,2,1,0,1,3,2,1,2,1]
//          
//      = [0,0,1,0,1,2,1,0,0,1,0,0]  
//
//.   So, our answer is 6 - note that the beginning and ending element cannot ever hold water, so if there is a value there it can be ignored

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    if(!height || height.length == 0) {
        return 0
    }
    
    let trapped = 0
    let maxLeft = []
    let maxRight = []
    let depth = [] //water depth
    let length = height.length
    let amount = 0
    
    // put the first value in since we know that
    maxLeft[0] = height[0]
    maxRight[length-1] = height[length-1]
    
    // left to right
    for(let i=1; i<height.length; i++) {
        maxLeft[i]=Math.max(height[i], maxLeft[i-1]) // We have the i-1 value because we prepopulated it above
    }
    
    // right to left
    for(let i=length-2; i>=0; i--) {
        maxRight[i]=Math.max(height[i], maxRight[i+1]) // We have the i+1 value because we prepopulated it above    
    }
    
    console.log("height:", height)
    console.log("maxLeft:", maxLeft)
    console.log("maxRight:",maxRight)
    
    // take the min value between the maxLeft and rightLeft values, subtract the height value, and put into a depth array
    for(let i=0; i< length; i++) {
        depth[i] = Math.min(maxLeft[i], maxRight[i]) - height[i]
    }
    
    depth.shift() //remove first
    depth.pop()  //remove last
    
    //sum up the values in the array excluding negative values and the first and last
    
    for(let i=0; i<depth.length; i++) {
        amount += depth[i]
    }
    
    console.log("height:", height)
    console.log("maxLeft:", maxLeft)
    console.log("maxRight:",maxRight)
    console.log("depth:",depth)
    
    return amount
};

let heights = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(heights))