// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Algo
// traverse the grid
// have a numOfIslands var init 0
// when we reach '1' look in all compass directions(not diag)
// recursively search for '1' adjoining the current position, change the current position to -1 
// break condition = if current position is outside of grid or value is 0 or -1
// return 1 as the success value
// add the value from the recusrive function to numOfIslands
// after for loop exits return numOfIslands

function mapIsland(x, y, grid) {

    if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length ||
        grid[y][x] == "0" || grid[y][x] == "-1") {
        return false
    }
    
    grid[y][x] = "-1"
    
    mapIsland(x+1, y, grid) //Right
    mapIsland(x-1, y, grid) //Left
    mapIsland(x, y+1, grid) //Down
    mapIsland(x, y-1, grid) //Up
    
    return true
}

let numIslands = function(grid) {
    
    if(!grid) {
        return 0
    }
    
    let islandCount = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                islandCount += mapIsland(j, i, grid) == true ? 1 : 0
            }
        }
    }
    return islandCount
}

let grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

let grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(undefined))