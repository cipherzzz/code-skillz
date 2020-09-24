// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

// Algo
// essentially we are trying to see the shortest route from one node to another in a graph
// bfs is best for finding the shortest path between two nodes

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let abcs = "abcdefghijklmnopqrstuvwxyz".split("")
    let wordSet = new Set(wordList)
    
    if(!wordSet.has(endWord)) {
        return 0
    }
    
    let queue = []
    let level = 1
    queue.push(beginWord)
    while(queue.length > 0) {
        let size = queue.length
        for(let a=0; a< size; a++) {
        let word = queue.shift()
        let chars = word.split("")
        for(let i=0; i<chars.length; i++) { //iterate over word
            let originalChar = chars[i]
            for(let j=0; j<abcs.length; j++) { // iterate over character combinations
                
                if(chars[i] == abcs[j]) {
                    continue
                }
                
                // check if the new word is the endword or in the set
                chars[i] = abcs[j]
                let newWord = chars.join("")
                if(newWord == endWord) {
                    return level + 1
                } 
                if(wordSet.has(newWord)) {
                    queue.push(newWord)
                    wordSet.delete(newWord)
                }
            }
            
            chars[i] = originalChar
        }
    }
    level++
    }
    
    return 0
};

let beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log", "cog"]

console.log(ladderLength(beginWord, endWord, wordList))
