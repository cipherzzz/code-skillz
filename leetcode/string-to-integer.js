// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
// Example 1:

// Input: "42"
// Output: 42
// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
//              Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// Example 4:

// Input: "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical 
//              digit or a +/- sign. Therefore no valid conversion could be performed.
// Example 5:

// Input: "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
//              Thefore INT_MIN (−231) is returned.

// Algo
// 1- regex
// 2- Number()

// question: is "4321hello" considered valid?

// 3 option
// only 4 options for first char are ' ', '-', '+', int
// vars: int result = 0, dictionary checker init with 0-9, sign int
// 1. trim input string head and tail for whitespace
// 2. check the first position for +/- if there is one, store that in a var - if it is not a +/- or an int, return 0
// 3. iterate over the rest of the string for consecutive ints
// if(checker.exists(str[i])) 
// check for overflow/underflow
// result = sign * result * 10 + str[i]
//  else
// check for overflow/underflow
// return result




/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let checker = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9 }
    let result = 0
    let trimmed = str.trim()
    let INT_MIN = -Math.pow(2, 31)
    let INT_MAX = Math.pow(2, 31) - 1

    // logic for sign or invalid first char
    let firstChar = trimmed[0]
    let hasSign = false
    let sign = 1
    if (checker[firstChar] !== undefined) {
        sign = 1
        hasSign = false
    }
    else if (firstChar == "+") {
        sign = 1
        hasSign = true
    }
    else if (firstChar == "-") {
        hasSign = true
        sign = -1
    }
    else {
        return 0
    }


    for (let i = hasSign ? 1 : 0; i < trimmed.length; i++) {
        if (checker[trimmed[i]] !== undefined) {
            result = result * 10 + (trimmed.charAt(i) - '0') // this weirdness converts to an int- Number(trimmed[i]) works too but
        }
        else {
            if (result * sign <= INT_MIN) {
                return INT_MIN
            }
            else if (result * sign >= INT_MAX) {
                return INT_MAX
            }
            else {
                return result * sign
            }
        }
    }

    if (result * sign <= INT_MIN) {
        return INT_MIN
    }
    else if (result * sign >= INT_MAX) {
        return INT_MAX
    }
    else {
        return result * sign
    }
};

console.log(myAtoi("-91283472332"))
// console.log(myAtoi("-42"))
// console.log(myAtoi("  -42.12 gdf"))
// console.log(myAtoi("2147483648"))
// console.log(myAtoi("-2147483648"))
// console.log(Math.pow(2, 31))
