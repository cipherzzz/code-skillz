// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 

// Constraints:

// s consists only of printable ASCII characters.

// Brute
// Reverse the string, removing the non-alphanumeric characters and compare
// Time O(n)
// Space O(2n)

// Better
// keep a pointer to the right and left char
// compare the chars and continue to move towards the center until the pointers meet or the chars are not equal
// Time O(n)
// Space O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeBrute = function(s) {
    
    let checker = "abcdefghijklmnopqrstuvwxyz0123456789".split("")
    
    //empty string is valid
    if(s && s.trim().length == 0) {
        return true
    }
    
    let forward = s.split("").filter((a) => {
        return checker.includes(a.toLowerCase())
    })
    
    let backwards = forward.slice(0,forward.length)
    for(let i=0; i<Math.floor(backwards.length/2); i++) {
        let first = backwards[i]
        backwards[i] = backwards[backwards.length-1-i]
        backwards[backwards.length-1-i] = first
    }

    return backwards.join("").toLowerCase() == forward.join("").toLowerCase()
};

console.log(isPalindromeBrute("A man, a plan, a canal: Panama"))