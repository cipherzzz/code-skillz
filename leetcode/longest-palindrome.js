// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// Algo
// palindromes start in a center and mirror out
// palindromes can have an even center or odd center
// iterate through the string indexes and check the even and odd palindrome cases

var expandFromCenter = function(str, left, right) {
    let i = 0
    while(str[left-i] && str[left-i] == str[right+i]) {
        i++
    }
    i--
    
    return str.slice(left-i, right+i+1)
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ""
    for(let i=0; i<s.length; i++) {
        let oddPalindrome = expandFromCenter(s,i,i)
        let evenPalindrome = expandFromCenter(s,i,i+1)
        
        if(oddPalindrome.length > longest.length) {
            longest = oddPalindrome
        }
        
        if(evenPalindrome.length > longest.length) {
            longest = evenPalindrome
        }
    }
    
    return longest
};

console.log(longestPalindrome("dbbd"))



