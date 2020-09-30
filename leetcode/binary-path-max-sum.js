// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//       1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//   -10
//   / \
//   9  20
//     /  \
//   15   7

// Output: 42

// Algo
// BFS through the tree 
// sum the current node value + the right and the left node values
// check against a historical max
// return the max



class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = root.val
    let stack = []
    stack[0] = root
    while (stack.length > 0) {
        let parent = stack.pop()
        let left = parent.left
        let right = parent.right

        let sum = 0
        
        let sumLeft = parent.val + (left != null?left.val:0)
        let sumRight = parent.val + (right != null?right.val:0)
        sum = sumLeft > sumRight?sumLeft:sumRight
        
        let sumAll = parent.val + (left != null?left.val:0) + (right != null?right.val:0)
        sum = sum > sumAll?sum:sumAll
        sum= sum > parent.val?sum:parent.val
        
        max = Math.max(max, sum)

        if (left) {
            stack.push(left)
        }

        if (right) {
            stack.push(right)
        }
    }
    return max
};

let node = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(maxPathSum(node))

node = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(maxPathSum(node))

node = new TreeNode(1, new TreeNode(2))
console.log(maxPathSum(node))

node = new TreeNode(1, new TreeNode(-2), new TreeNode(3))
console.log(maxPathSum(node))