// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

// Algo
// iterate the list - for each item, sort it, and put it in a dict with the sorted value as the key and the original as the value contained within a list
// return the 'values' of the dict


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = {}
    for(let i=0; i<strs.length; i++) {
        let key = strs[i].split('').sort().join('')
        let value = strs[i]
        if(anagrams[key]) {
            anagrams[key].push(value) 
        } else {
            anagrams[key] = [value]
        }
    }
    return Object.values(anagrams)
};

let anagrams = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(anagrams))