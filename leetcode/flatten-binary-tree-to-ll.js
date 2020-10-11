/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    return traverse(root)
};


function traverse(node) {

    if (node == null) {
        return null
    }

    console.log(node.value)
    traverse(node.left)
    traverse(node.right)
}

class TreeNode {
    constructor(value, left, right) {
        this.value = value == undefined ? null : value
        this.left = left == undefined ? null : left
        this.right = right == undefined ? null : right
    }
}

let root
root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)))
flatten(root)
