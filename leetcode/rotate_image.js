// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]


// Constraints:

// matrix.length == n
// matrix[i].length == n
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// Algo
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

// we want to rotate to look like
//   [741]
//   [852]
//   [963]

// if we transposed the matrix - replace rows and columns we will have 
//   [147]
//   [258]
//   [369]

// reverse the order of each row to arrive at the solution
//   [741]
//   [852]
//   [963]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix.length // use for both since a cube

    // height
    for (let i = 0; i < length; i++) {
        // length
        for (let j = i; j < length; j++) {
            let replaced = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = replaced
        }
    }

    matrix.forEach((row) => {
        row.reverse()
    })

    return matrix
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(rotate(matrix))
