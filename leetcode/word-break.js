// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


// s = "leetcode", wordDict = ["leet", "code"]

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    if(!s || s.length == 0 || !wordDict || wordDict.length == 0) {
        return false
    }
    
    let cache = new Map()
    return wordExists(s, wordDict, 0, cache)
};

function wordExists(s, wordDict, start, cache) {
    
    if(start == s.length) {
        return true
    }
    
    console.log("start:", start)
    if(cache.has(start)) {
        return cache.get(start)
    }
    
    for(let end=start+1; end<=s.length; end++) {
        let word = s.substring(start,end)
        if(wordDict.includes(word) && wordExists(s, wordDict, end, cache)) {
            cache.set(start, true)
            return true
        }
    }
    
    cache.set(start, false)
    return false
}

let s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))

s = "applepenapple", wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict))

s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict))