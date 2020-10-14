// We are given a binary tree (with root node root), a target node, and an integer value K.

// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.



// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

// Output: [7,4,1]

// Explanation: 
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.



// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.


// Note:

// The given tree is non-empty.
// Each node in the tree has unique values 0 <= node.val <= 500.
// The target node is a node in the tree.
// 0 <= K <= 1000.

// algo
// we would want to do a BFS search to get the nodes at a particular level
// the trick is that we are starting in the tree and don't have a reference to the parent
// we can traverse the tree and keep a reference to the parent of the node
// if we are traveling backwards we are essentially traversing an acyclic graph with BFS
// keep a reference to the `visited` nodes
// For each node as we traverse we need to do the following
// check if our current level is the requested level - if so, return the queue items
// 1. check if we have already visited - if so, do not continue
// 2. if we have not, put that node in the visited map
// 3. add the left, right, and parent to the queue


/**
 * Definition for a binary tree node.
 **/
class TreeNode {
 constructor(val, left, right) {
  this.val = val == undefined ? null : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
 }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
 let visited = {}
 let parent = {}
 parent[root.val] = null
 let targetNode = null
 let distance = 0

 //traverse tree and populate parents
 let queue = []
 queue.push(root)
 while (queue.length > 0) {
  let node = queue.shift()

  if (node.val == target) { //get the target node to start from
   targetNode = node
  }

  if (!node) {
   continue
  }

  if (node.left) {
   parent[node.left.val] = node
   queue.push(node.left)
  }
  if (node.right) {
   parent[node.right.val] = node
   queue.push(node.right)
  }
 }

 // do a BFS search
 queue = []
 queue.push(targetNode)
 while (queue.length > 0) {
  
  if(distance == K) {
   return queue
  }
  
  let node = queue.shift()

  if (visited[node.val] == true) {
   continue
  }

  visited[node.val] = true

  if (node.left && visited[node.left.val] == undefined) {
   queue.push(node.left)
  }
  if (node.right && visited[node.right.val] == undefined) {
   queue.push(node.right)
  }
  if (parent[node.val] && visited[parent[node.val]] == undefined) {
   queue.push(parent[node.val])
  }

  distance++
 }

};


let root, target, K
target = 5, K = 2
root = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
 new TreeNode(1, new TreeNode(0), new TreeNode(8)))
console.log(distanceK(root, target, K))
