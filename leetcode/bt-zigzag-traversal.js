// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//   / \
//   9  20
//     /  \
//   15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

// Traverse binary tree
// vars: levels[][], queue[] *
// while(queue.notEmpty())
// levelSize = queue.size()
// levelValues = []
// for loop over levelSize
// node = stack.pop
// levelValues.push(node.val)
// add the left and right node to stack if they exist
// levels[levelIndex] = leveValues
// levelIndex++
// return levels   

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function pushNode(node, queue) {

}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {

    if (!root) {
        return []
    }

    let levels = []
    let queue = []
    let levelIndex = 0
    queue.push(root)
    while (queue.length > 0) {
        let levelCount = queue.length
        let levelItems = []
        for (let i = 0; i < levelCount; i++) {
            let node = queue.shift()
            let isLR = levelIndex % 2 == 0
            if(isLR == true) {
              levelItems.push(node.val) 
            } else {
              levelItems.unshift(node.val) 
            }
    
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        levels[levelIndex] = levelItems
        levelIndex++
    }
    return levels
};

let bt = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(zigzagLevelOrder(bt))
