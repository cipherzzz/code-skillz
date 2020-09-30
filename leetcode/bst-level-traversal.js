// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//   / \
//   9  20
//     /  \
//   15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Traverse the tree - BFs
// create a list of lists where each list represents a level of the tree
// create an index variable init to 0
// create a queue and add the root node to the queue
// begin a while loop while the queue is not empty
// now get the size of the queue - this indicates how many items are at a particular level
// for loop over the size
// pop an item from the queue and add its value to the level list at the current index
// add the left/right node of the current node if it exists to the queue
// out of for loop - increment index


class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(!root) {
        return []
    }
    
    let levels = []
    let levelIndex = 0
    let queue = []
    queue.push(root)
    
    while(queue.length > 0) {
        let levelSize = queue.length
        let localLevel = []
        for(let i=0; i<levelSize; i++) {
            let node = queue.shift()
            localLevel.push(node.val)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        levels[levelIndex] = localLevel
        levelIndex++
    }
    return levels
};

let bt = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(levelOrder(bt))
