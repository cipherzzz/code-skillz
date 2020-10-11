// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

// Algo
// vars: carry, sum
// iterate over the string indexes from right to left
// x%2 to get remainder and Math.floor(x/2) to get the carry

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let result = ""
    let aIndex = a.length-1
    let bIndex = b.length-1
    
    while(aIndex >= 0 || bIndex >=0) {
        let sum = carry
        if(aIndex >= 0) {
            let addendA = a.charAt(aIndex) - 0
            sum += addendA
            aIndex--
        }
        
        if(bIndex >= 0) {
            let addendB = b.charAt(bIndex) - 0
            sum += addendB
            bIndex--
        }
        
        let rem = sum%2
        result = rem + "" + result
        carry = Math.floor(sum/2)
    }
    
    if(carry > 0) {
         result = carry + "" + result
    }
    
    return result
};

let a, b

a = "1010", b = "1011"
console.log(addBinary(a, b))