// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

// Algo
// We want the index of the FIRST UNIQUE character in the string
// Once we find the first unique occurrence we can exit
// create a hash with the value of the char and how many times it occurs
// loop through the values and return the first char that has a count of 1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    s.split('').forEach((char)=>{
        if(map[char]) {
            map[char] = map[char]+1
        } else {
            map[char] = 1
        }
    })
    
    for(let i=0; i<s.length; i++) {
        let char = s[i]
        let count = map[s[i]]
        if(count == 1) {
            let index = s.indexOf(s[i])
            console.log(char, count, index)
            return index
        }
    }
    
    return -1
};



let s = "billybob"
console.log(firstUniqChar(s))