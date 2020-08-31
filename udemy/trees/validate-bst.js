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
// Accepted

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
 
 // do and in order traversal and check if the next value is ever less than the previous
 function bstTraverseInOrder(current, nodes) {
     
     if(!current || !nodes) {
         return false
     }
     
     if(current.left) {
         bstTraverseInOrder(current.left, nodes)
     }
     if(current.val < nodes[nodes.length-1]) {
        return false 
     }
     nodes.push(current.val)
     if(current.right) {
         bstTraverseInOrder(current.right, nodes)
     }
     return nodes
 }
 
 function bstValidate(node, min, max) {
    
    // break case - signifies that we are at the end of the tree
    // and false has not been returned
    if(node == null) {
        return true
    }
    
    const value = node.val
    
    // We should know the max and min for a recursive DFS function as the leaf is
    // processed first
    // if the node value is greater than the passed in max
    if(max != null && value >= max) {
        return false
    }
    // if the node value is less than the passed in min
    if(min != null && value <= min) {
        return false
    }
    
    // if going left - the current val should be larger than any nodes below
    if(!bstValidate(node.left, min, value)) return false
    
    // going right - the current val will be less in a BST
    if(!bstValidate(node.right, value, max)) return false
    
    return true
}
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    console.log(bstTraverseInOrder(root, []))
};

