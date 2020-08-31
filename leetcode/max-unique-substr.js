// 3. Longest Substring Without Repeating Characters
// Medium

// 10400

// 603

// Add to List

// Share
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Algo
// iterate over string and check substr for any non-unique characters
// if substr is unique, check if it replaces current max, add another char to the right
// if substr is not unique, remove char to the left until it is
// once the right index of the substr is at the end of the string, return the max value member var
// use a set to determine uniqueness

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let uniqueSet = new Set()
    let left = 0
    let right = 0
    let maxSubstr = 0
    while(right < s.length) {
        if(!uniqueSet.has(s.charAt(right))) {
            uniqueSet.add(s.charAt(right))
            maxSubstr = Math.max(maxSubstr, uniqueSet.size)
            right++
        } else {
            uniqueSet.delete(s.charAt(left))
            left++
        }
    }
    return maxSubstr
};


console.log(lengthOfLongestSubstring("abbcdea"))
console.log(lengthOfLongestSubstring("abbc"))