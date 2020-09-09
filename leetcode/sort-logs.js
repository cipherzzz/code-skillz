// You have an array of logs.  Each log is a space delimited string of words.

// For each log, the first word in each log is an alphanumeric identifier.  Then, either:

// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

// Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

// Return the final order of the logs.

 

// Example 1:

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

// Constraints:

// 0 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// logs[i] is guaranteed to have an identifier, and a word after the identifier.

//Arrays.sort with a comparator function 
// check if 'a' is a 'digit' log or 'word'
// if 'word'/'digit' then 'word' comes first
// if 'word'/'word' then compare first word of each array
// if 'digit'/digit then compare first word of each array


function compareLogs(a, b) {
    let aValues = a.split(" ").slice(1)
    let bValues = b.split(" ").slice(1)
    let aIsLetter = isNaN(Number(aValues[0]))
    let bIsLetter = isNaN(Number(bValues[0]))
    if(aIsLetter && bIsLetter) {
        const compare = aValues.join().localeCompare(bValues.join())
        return compare != 0 ? compare : a.localeCompare(b)
    } 
    
    if(aIsLetter) {
        return -1
    }
    
    if(bIsLetter) {
        return 1
    }
    
    return 0
}


/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let sorted = logs.sort(compareLogs)
    console.log(sorted)
    return sorted
};

let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
reorderLogFiles(logs)