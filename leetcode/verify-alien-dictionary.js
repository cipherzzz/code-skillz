// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

// Algo
// do a nested for loop to compare word one with the next words in the sequence to verify that word should come before the others
// check on a character basis within an additional loop 
// if all chars are the same on the shortest word, that shortest word should come first

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let checker = {}
    for(let i=0; i<order.length; i++) {
        checker[order.charAt(i)] = i
    }
    
    for(let i=0; i<words.length; i++) {
        let prevWord = words[i]
        for(let j=i+1; j<words.length; j++) {
            let nextWord = words[j]
            let charCount = Math.min(prevWord.length, nextWord.length)
            for(let k=0; k<charCount; k++) {
                if(checker[prevWord[k]] < checker[nextWord[k]]) {
                    break
                } else if(checker[prevWord[k]] > checker[nextWord[k]]) {
                    return false
                } else if(k == charCount-1 && prevWord.length != charCount) { // here we need to check the case if `pall` and `pallet`. `pall` should come first`
                    return false
                }
            }
        }
    }
    
    return true
};

let words, order
words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
console.log(isAlienSorted(words, order))

words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
console.log(isAlienSorted(words, order))