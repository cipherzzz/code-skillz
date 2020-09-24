// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
 

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

// Algo
// search for the first character of the word in the grid
// if not found, return false
// if found search the compass directions for the next character 
// replace the found characters with -1 or something to keep duplicates from happening
// keep going until the whole word is either found or not

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let wordExists = false
    for(let i=0; i< board.length; i++) {
        for(let j=0; j< board[i].length; j++) {
            if(board[i][j] == word[0] && dfs(0, word.split(""), board, j, i)) {
                return true 
            }
        }
    }
    return wordExists
};

function dfs(index, characters, grid, x, y) {
    
    if(index == characters.length) {
        return true
    }
    
    if(x < 0 || y < 0 || y >= grid.length || x >= grid[y].length || characters[index] != grid[y][x]) {
        return false
    }
    
    let saved = grid[y][x]
    grid[y][x] = " "
    
    let found = dfs(index+1, characters, grid, x+1, y)
    || dfs(index+1, characters, grid, x-1, y)
    || dfs(index+1, characters, grid, x, y+1)
    || dfs(index+1, characters, grid, x, y-1)
    
    grid[y][x] = saved
    
    return found
}

let board =
[["C","A","A"],["A","A","A"],["B","C","D"]]
let word = "AAB"//, return true.
console.log(exist(board, word))

// word = "SEE"//, return true.
// console.log(exist(board, word))

// word = "ABCB"//, return false.
// console.log(exist(board, word))

