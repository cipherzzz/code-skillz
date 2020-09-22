// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

// Algo
// Use two pointers left and right 
// check if the left/right range contains the chars
// we increment left pointer until the range no longer contains them
// we decrement the left pointer to keep the chars
// start decrementing the right pointer until the chars are not contained
// increment the right pointer
// return the substring with the left and right+1 index
// ** Assuming case sensitive ***

function checkCharsInSubstring(sub, chars) {

    for(let i=0; i< chars.length; i++) {
     let index = sub.indexOf(chars[i])
        if(index == -1) {
            return false
        }   
    }
    
    return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

        let chars = t.split("")
        let left = 0
        let right = s.length;
        let leftWindow = s.substr(left, right)
        
        // check if it contains it at all
        if(checkCharsInSubstring(leftWindow, chars) == false || leftWindow.length < chars.length) {
            return ""
        }
        
        while(checkCharsInSubstring(leftWindow, chars) == true) {
            left++
            leftWindow = s.substr(left, right)
        }
        
        // decrement left
        left--
        
        let rightWindow = s.substr(left, right)
        while(checkCharsInSubstring(rightWindow, chars) == true) {
            right--
            rightWindow = s.substr(left, right)
        }
        
        // increment right
        right++
        
        return s.substr(left, right)
};

// let s = "ADOBECODEBANC"
// let t = "ABC"
// console.log(minWindow(s, t))

s = "a"
t = "aa"
console.log(minWindow(s, t))

// s = "a"
// t = "a"
// console.log(minWindow(s, t))