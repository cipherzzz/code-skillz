// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:

//     2
//   / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//   / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Question
// Are we checking if there is a duplicate value?
// how deep is this?
// do you have a preference for space vs time complexity?

// Approach
// DFS with inorder traversal
// 1->2->3
// is current node less than the next node - since the left should always be less regardless of what side of the tree we are on

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function validateNode(node, min, max) {
    
    if(node == null) {
        return true
    } else if(min != null && node.val <= min || max != null && node.val >= max) {
        return false
    }else {
        return validateNode(node.left, min, node.val) && validateNode(node.right, node.val, max)
    }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validateNode(root, null, null)
};

let ex1 = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null))
let ex2 = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3, null, null), new TreeNode(6, null, null)))
console.log(isValidBST(ex1))
console.log(isValidBST(ex2))
