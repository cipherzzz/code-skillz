// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.



// Example:

// Input: 
// board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// words = ["oath","pea","eat","rain"]

// Output: ["eat","oath"]


// Note:

// All inputs are consist of lowercase letters a-z.
// The values of words are distinct.

// Algo
// loop over the words
// for each word find the first letter in the board and dfs for the rest
// continue for each starting letter for that word and if found push the word to a found array

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let results = []

    for (let w = 0; w < words.length; w++) {
        let word = words[w]

        if (!word || word.length == 0) {
            continue
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] == word[0] && dfs(0, word.split(""), board, j, i)) {
                    results.push(word)
                }
            }
        }
    }

    return results
};

//return true if the word is found
function dfs(index, letters, board, x, y) {
    
    
    if (index >= letters.length) {
        return true
    }

    if (x < 0 || y < 0 || !board[y] || x >= board[y].length || y >= board.length || letters[index] != board[y][x]) {
        return false
    }

    let placeholder = board[y][x]
    board[y][x] = "-1"

    let found = dfs(index + 1, letters, board, x + 1, y) // E
        ||
        dfs(index + 1, letters, board, x - 1, y) // W
        ||
        dfs(index + 1, letters, board, x, y + 1) // N
        ||
        dfs(index + 1, letters, board, x, y - 1) // S

    board[y][x] = placeholder

    return found
}


// let board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ],
// words = ["oath","pea","eat","rain"]

let board = [["a"]],
words = ["ab"]

console.log(findWords(board, words))