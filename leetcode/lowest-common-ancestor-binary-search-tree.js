 class TreeNode {
     constructor(val, left, right) {
         this.val = val;
         this.left = left == undefined ? null : left
         this.right = right == undefined ? null : right;
     }
 }

 var lowestCommonAncestor = function(root, p, q) {
     return containsPQ(root, p, q)
 };

 function containsPQ(node, p, q) {

    if(p.val < node.val && q.val < node.val) { //in the left
       containsPQ(node.left, p,q)
    } else if(p.val > node.val && q.val > node.val) { //in the right
       containsPQ(node.right, p,q)
    } else {
      return node
    }
 }
 
 function assert(value, expected) {
     if(value == expected) {
         console.log("Passed:", expected)
     } else {
         console.log("Failed:", value, "!=", expected)
     }
 }
 
 //[6,2,8,0,4,7,9], p = 2, q = 8
 let p=new TreeNode(2, new TreeNode(0), new TreeNode(4))
 let q= new TreeNode(8, new TreeNode(7), new TreeNode(9))
 let root = new TreeNode(6, p, q)
 assert(lowestCommonAncestor(root, p, q).val, 6)
 