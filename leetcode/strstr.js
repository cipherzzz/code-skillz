// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Constraints:

// haystack and needle consist only of lowercase English characters.

// Algo
// obviously this would be easiest - console.log("hello".indexOf("ll"))
//
// we would need to move over the string from left to right with a range of the needle
// ie. for "needle" we would iterate over the needle string and check the i and i+1 to see if it matched the needle
// take the i value of a match and return it
// if there is no match return -1
// if needle is empty return 0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 
var strStr = function(haystack, needle) {
    
    if(!needle || needle == "") {
        return 0
    }
    
    for(let i=0; i< haystack.length-needle.length+1; i++) {
        let subst = haystack.substr(i,needle.length)
        if(subst == needle) {
            return i
        }
    }
    
    return -1
};

console.log(strStr("hellpo", "lp"))
console.log(strStr("hellpo", ""))
console.log(strStr("hellpo", "z"))
console.log(strStr("a", "a"))