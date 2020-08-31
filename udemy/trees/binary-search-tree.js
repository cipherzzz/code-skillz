class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode
        }
        else {
            let currentNode = this.root
            while (currentNode) {

                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
                else {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return null
        }
        let currentNode = this.root
        while(currentNode) {
            if(value > currentNode.value) {
                currentNode = currentNode.right
            } else if(value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                return currentNode
            }
        }
    }
    // remove
    
    // return the tree as an array going from left to right
    breadthFirstTraversalIterative() {
        let nodes = [] // the return array
        let queue = [] // the queue to handle the child nodes to be processed - FIFO
        
        queue.push(this.root) // first item for traversal is the root
        
        while(queue.length > 0) {
            let currentNode = queue.shift() // remove the first item from the queue
            nodes.push(currentNode.value)   // put the first item's value in the return array
            // BFS goes left to right
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return nodes
    }
    
    breadthFirstTraversalRecursive(queue, nodes) {
        
        if(!queue) {
            queue = [this.root]
        }
        
        if(!nodes) {
            nodes = []
        }
        
        if(queue.length == 0) {
            return nodes
        }
        
        let currentNode = queue.shift()
        nodes.push(currentNode.value)
        if(currentNode.left) {
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
        
        return this.breadthFirstTraversalRecursive(queue, nodes)
    }
    
    depthFirstTraversal(traversalType, currentNode, nodes) {
        
        if(!currentNode) {
            currentNode = this.root
        }
        
        if(!nodes) {
            nodes = []
        }
        
        if(traversalType == "PreOrder") {
            console.log("PreOrder: "+currentNode.value)
            nodes.push(currentNode.value)
        }
        
        if(currentNode.left) {
            this.depthFirstTraversal(traversalType, currentNode.left, nodes)
        }
        
        if(traversalType == "InOrder") {
            console.log("InOrder: "+currentNode.value)
            nodes.push(currentNode.value)
        }
        
        if(currentNode.right) {
            this.depthFirstTraversal(traversalType, currentNode.right, nodes)
        }
        
        if(traversalType == "PostOrder") {
            console.log("PostOrder: "+currentNode.value)
            nodes.push(currentNode.value)
        }
        
        return nodes
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log('BFS Iterative', tree.breadthFirstTraversalIterative());
console.log('BFS Recursive', tree.breadthFirstTraversalRecursive());

console.log('DFS PreOrder', tree.depthFirstTraversal("PreOrder"));

console.log('DFS InOrder', tree.depthFirstTraversal("InOrder"));

console.log('DFS PostOrder', tree.depthFirstTraversal("PostOrder"));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
