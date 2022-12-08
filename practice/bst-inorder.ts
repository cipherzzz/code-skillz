
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

// recursive inorder traversal
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const traverse = (node: TreeNode | null) => {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
}



   
