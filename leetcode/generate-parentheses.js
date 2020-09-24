// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// Algo
// essentially we will be generating a tree based on the rules of well-formed parentheses
// rules
// #1 ( >= ) 
// #2 ( <= n
// #3 ) <= n
// #3 parentheses_string.length == n*2

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let combinations = []
    let currentString = ""
    let openCount = 0
    let closedCount = 0
    return backtrack(combinations, currentString, openCount, closedCount, n)
};

function backtrack(combinations, currentString, openCount, closeCount, max) {
    if(currentString.length == max * 2) {
        combinations.push(currentString)
    }
    
    if(openCount < max) {
        backtrack(combinations, currentString+"(", openCount+1, closeCount, max)
    }
    
    if(closeCount < openCount) {
        backtrack(combinations, currentString+")", openCount, closeCount+1, max)
    }
    
    return combinations
}

console.log(generateParenthesis(3).length)