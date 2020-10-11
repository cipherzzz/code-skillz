// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//   1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

// Algo - recursively traverse the tree in a dft preorder
// add the node value with a `->` delimiter
// when the node does not have a left of right value we have reached the leaf
// add the string to the paths[]

class TreeNode {
    constructor(value, left, right) {
        this.value = value==undefined?null:value
        this.left = left==undefined?null:left
        this.right = right==undefined?null:right
    }
}

var binaryTreePaths = function(root) {
    let paths = []
    traverse(root, "", paths)
    return paths
};

function traverse(node, path, paths) {
    if(node == null) {
        return 
    }
    
    path += node.value
    if(!node.left && !node.right) {
        paths.push(path)
    }
    
    path += '->'
    traverse(node.left, path, paths)
    traverse(node.right, path, paths)
}

let root
root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
console.log(binaryTreePaths(root))