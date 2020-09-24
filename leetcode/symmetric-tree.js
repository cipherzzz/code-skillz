// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//   / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//   / \
//   2   2
//   \   \
//   3    3


// Follow up: Solve it both recursively and iteratively.

class TreeNode {
    constructor(val, left, right) {
        this.value = val == undefined ? 0 : val
        this.left = left == undefined ? null : left
        this.right = right == undefined ? null : right
    }
}

function isSymmetricRecursive(node1, node2) {

    if (node1 == null || node2 == null) {
        return node1 == node2
    }
    
    if(node1.value !== node2.value) {
        return false
    } 

    return isSymmetricRecursive(node1.left, node2.right) && isSymmetricRecursive(node1.right, node2.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    if (root == null) {
        return true
    }

    return isSymmetricRecursive(root.left, root.right)
};

let bt = new TreeNode(1, new TreeNode(3, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
console.log(isSymmetric(bt))
