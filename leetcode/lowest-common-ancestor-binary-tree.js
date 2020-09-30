 class TreeNode {
     constructor(val, left, right) {
         this.val = val;
         this.left = left == undefined ? null : left
         this.right = right == undefined ? null : right;
     }
 }

 var lowestCommonAncestor = function(root, p, q) {
     containsPQ(root, p, q)
     return this.lca
 };

 let lca = null

 function containsPQ(node, p, q) {
     if (node == null) {
         return false
     }

     let foundCount = 0

     //add 1 if node is equal to p or q
     if (node == p || node == q) {
         foundCount++
     }

     // add 1 if left tree has p or q
     if (containsPQ(node.left, p, q) == true) {
         foundCount++
     }

     // add 1 if right tree has p or q
     if (containsPQ(node.right, p, q) == true) {
         foundCount++
     }

     //note the node
     if (foundCount >= 2) {
         this.lca = node
     }

     // return true if we have found anything
     return foundCount > 0
 }
 
 function assert(value, expected) {
     if(value == expected) {
         console.log("Passed:", expected)
     } else {
         console.log("Failed:", value, "!=", expected)
     }
 }
 
 //[3,5,1,6,2,0,8], p = 5, q = 1
 let p=new TreeNode(5, new TreeNode(6), new TreeNode(2))
 let q= new TreeNode(1, new TreeNode(0), new TreeNode(8))
 let root = new TreeNode(3, p, q)
 assert(lowestCommonAncestor(root, p, q).val, 3)
 