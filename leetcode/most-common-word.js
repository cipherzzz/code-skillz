// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
 

// Note:

// 1 <= paragraph.length <= 1000.
// 0 <= banned.length <= 100.
// 1 <= banned[i].length <= 10.
// The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
// paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
// There are no hyphens or hyphenated words.
// Words only consist of letters, never apostrophes or other punctuation symbols.

// Approach
// simplified case
// split string and put each item in a map with a corresponding 'count' attribute and return the largest
//
// this is made more difficult due to the banned list
// we need to check if the word is in the list now
//
// there are also punctuation marks that we need to account for

// Algo
// check for null
// create a 'wordCount' dict to put the word/count key values in
// create a 'mostCommon' var to hold the value of the most common word
// split the paragraph into a 'words' array of words using a regex
// put the first value of the 'words' in the 'mostCommon'
// take each word in the banned list and put it in a 'banned' Set to refer to later
// iterate over the 'words' and 
//   - take lowercase value and check if it is banned - if not continue
//   - check if it exists in wordCount - if not initialize with a count of 0 and continue
//  - increment the count of the iterated word in wordCount
//  - check if wordCount for the iterated word is greater than the value of wordCount of mostCommon - if so, update mostCommon
// return mostCommon

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, ban) {
    if(!paragraph || !ban) {
        return null
    }
    
    let wordCount = {}
    let banned = new Set()
    let mostCommon = ""
    
    let words = paragraph.split(/\W+/) // removes all punctuation and splits words
    
    // add the banned words to a set - guarantee uniqueness
    for(let word of ban) {
        banned.add(word)
    }
    
    for(let word of words) {
        let lowerCaseWord = word.toLowerCase()
        if(!banned.has(lowerCaseWord)) {
            if(wordCount[lowerCaseWord] == undefined) {
                wordCount[lowerCaseWord] = 0
            }
            wordCount[lowerCaseWord]++
            if(mostCommon == "" || wordCount[lowerCaseWord] > wordCount[mostCommon]){
                mostCommon = lowerCaseWord
            }
        }
    }
    
    return mostCommon
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))