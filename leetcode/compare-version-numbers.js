// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.
 

// Example 1:

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
// Example 2:

// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".
// Example 3:

// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
// Example 4:

// Input: version1 = "1.0.1", version2 = "1"
// Output: 1
// Example 5:

// Input: version1 = "7.5.2.4", version2 = "7.5.3"
// Output: -1
 

// Constraints:

// 1 <= version1.length, version2.length <= 500
// version1 and version2 only contain digits and '.'.
// version1 and version2 are valid version numbers.
// All the given revisions in version1 and version2 can be stored in a 32-bit integer.

// Algo
// split version1 and version2 by the '.' char
// iterate over the length of whichever has the longest length
// if one of the versions does not have a number at the index use 0
// compare the two and if one is bigger return the correct comparison
// ie. version1 = "7.5.2.4", version2 = "7.5.3"
// use the version 1 length in the for loop
// version1[i] and version2[i] deviate at i=2 and 
// return -1 since version1 is less than version2


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let versions1 = version1.split(".")
    let versions2 = version2.split(".")
    let length = versions1.length>versions2.length?versions1.length:versions2.length
    for(let i=0; i<length; i++) {
        let version1Number = versions1[i]==undefined?0:Number(versions1[i])
        let version2Number = versions2[i]==undefined?0:Number(versions2[i])
        if(version1Number > version2Number) {
            return 1
        } else if(version1Number < version2Number){
            return -1
        }
    }
    return 0
};

let version1 = "7.5.2.4", version2 = "7.5.3"
console.log(compareVersion(version1, version2))

version1 = "1.0.1", version2 = "1"
console.log(compareVersion(version1, version2))

version1 = "1.0", version2 = "1.0.0"
console.log(compareVersion(version1, version2))

version1 = "1.01", version2 = "1.001"
console.log(compareVersion(version1, version2))