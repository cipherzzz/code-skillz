// Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

// A move is guaranteed to be valid and is placed on an empty block.
// Once a winning condition is reached, no more moves are allowed.
// A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
// Implement the TicTacToe class:

// TicTacToe(int n) Initializes the object the size of the board n.
// int move(int row, int col, int player) Indicates that player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.
// Follow up:
// Could you do better than O(n2) per move() operation?



// Example 1:

// Input
// ["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
// [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
// Output
// [null, 0, 0, 0, 0, 0, 0, 1]

// Explanation
// TicTacToe ticTacToe = new TicTacToe(3);
// Assume that player 1 is "X" and player 2 is "O" in the board.
// ticTacToe.move(0, 0, 1); // return 0 (no one wins)
// |X| | |
// | | | |    // Player 1 makes a move at (0, 0).
// | | | |

// ticTacToe.move(0, 2, 2); // return 0 (no one wins)
// |X| |O|
// | | | |    // Player 2 makes a move at (0, 2).
// | | | |

// ticTacToe.move(2, 2, 1); // return 0 (no one wins)
// |X| |O|
// | | | |    // Player 1 makes a move at (2, 2).
// | | |X|

// ticTacToe.move(1, 1, 2); // return 0 (no one wins)
// |X| |O|
// | |O| |    // Player 2 makes a move at (1, 1).
// | | |X|

// ticTacToe.move(2, 0, 1); // return 0 (no one wins)
// |X| |O|
// | |O| |    // Player 1 makes a move at (2, 0).
// |X| |X|

// ticTacToe.move(1, 0, 2); // return 0 (no one wins)
// |X| |O|
// |O|O| |    // Player 2 makes a move at (1, 0).
// |X| |X|

// ticTacToe.move(2, 1, 1); // return 1 (player 1 wins)
// |X| |O|
// |O|O| |    // Player 1 makes a move at (2, 1).
// |X|X|X|


// Constraints:

// 2 <= n <= 100
// player is 1 or 2.
// 1 <= row, col <= n
// (row, col) are unique for each different call to move.
// At most n2 calls will be made to move.

// Algo
// player makes a move
// we take that move position and check the compass positions including diagonals to find a winning move
// recursion and break condition is if the symbol is populated at the boundary



class TicTacToeMark {
    constructor(n) {
        this.n = n
        this.grid = []
        for (let i = 0; i < n; i++) {
            this.grid.push(new Array(n).fill(""))
        }
    }

    /**
     * Player {player} makes a move at ({row}, {col}).
            @param row The row of the board.
            @param col The column of the board.
            @param player The player, can be either 1 or 2.
            @return The current winning condition, can be either:
                    0: No one wins.
                    1: Player 1 wins.
                    2: Player 2 wins. 
     * @param {number} row 
     * @param {number} col 
     * @param {number} player
     * @return {number}
     */
    move(row, col, player) {
        this.grid[row][col] = player
        return this.checkEqual(this.grid, row, col, player)
    }

    checkEqual(grid, row, col, player) {

        // check if we in bounds
        if (row >= grid.length || row < 0 || col >= grid.length || col < 0 || grid[row][col] != player) {
            return false
        }

        return grid[row][col] == player &&
            (this.checkEqual(grid, row, col + 1, player) //E
                ||
                this.checkEqual(grid, row, col - 1, player) //W
                ||
                this.checkEqual(grid, row - 1, col, player) //N
                ||
                this.checkEqual(grid, row + 1, col, player) //S
                //Diagonals
                ||
                this.checkEqual(grid, row - 1, col + 1, player) //SE
                ||
                this.checkEqual(grid, row - 1, col - 1, player) //SW
                ||
                this.checkEqual(grid, row + 1, col + 1, player) //NE
                ||
                this.checkEqual(grid, row + 1, col - 1, player)) //NW
    }
}

// Algo
// player makes a move
// we iterate over the length of the grid and use that counter since it's a square to check all positions
// we can use a counter and add the found X or O to it and check if counter == grid.size
// rows we can just start at 0 in the i row and increment to the end 
// columns we can just start at 0 in the i column and increment to the end 
// the key the diagonals solution is that there will only be one diagonal that is possible with a board of n*n with a winning move of n
// that will go right through the middle of the grid
// positive diagonal the i will be the same for row and column
// negative diagonal we will be coming from the other direction so we will need another pointer and additional decrement
// at the end of the function - check all the conditions with an or condition


class TicTacToe {
    constructor(n) {
        this.grid = []
        for (let i = 0; i < n; i++) {
            this.grid.push(new Array(n).fill(""))
        }
    }

    /**
     * Player {player} makes a move at ({row}, {col}).
            @param row The row of the board.
            @param col The column of the board.
            @param player The player, can be either 1 or 2.
            @return The current winning condition, can be either:
                    0: No one wins.
                    1: Player 1 wins.
                    2: Player 2 wins. 
     * @param {number} row 
     * @param {number} col 
     * @param {number} player
     * @return {number}
     */
    move(row, col, player) {
        this.grid[row][col] = player
        return this.checkDirection(this.grid, row, col, player) ? player : 0
    }

    checkDirection(grid, row, col, player) {
        let length = grid.length
        let rowCounter = 0
        let columnCounter = 0
        let posDiagCounter = 0
        let negDiagCounter = 0

        let negDiagIterator = length - 1 // This is required to be able to go from right to left

        // Our O(n) loop
        for (let i = 0; i < length; i++) {

            // check row items
            if (grid[row][i] == player) {
                rowCounter++
            }

            // check column items
            if (grid[i][col] == player) {
                columnCounter++
            }

            // check pos diag
            if(grid[i][i] == player) {
                posDiagCounter++
            }
            
            // check neg diag
            if(grid[negDiagIterator][i] == player) {
                negDiagCounter++
            }
            negDiagIterator--
        }
        
        return rowCounter==length || columnCounter==length || posDiagCounter==length || negDiagCounter == length
    }
}

function assert(test, expected) {
    if(test == expected) {
        console.log("PASSED")
    } else {
        console.log("FAILED")
    }
}

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

let game = new TicTacToe(2)
console.log(game.move(1, 1, 1))
assert(game.move(0, 1, 1), 1)

game = new TicTacToe(2)
console.log(game.move(0, 0, 2))
console.log(game.move(1, 1, 1))
assert(game.move(0, 1, 2), 2)


