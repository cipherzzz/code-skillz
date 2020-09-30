class TreeNode {
    constructor(value, left, right) {
        this.value = value==undefined?null:value
        this.left = left==undefined?null:left
        this.right = right==undefined?null:right
    }
}

// [5,1,4,null, null, 6, 7]
let root = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(6), new TreeNode(7)))

function printTreeBFS(root) {
    let queue = []
    let level = 0
    queue.push([root, level])
    while(queue.length > 0) {
        
        let nodeArr = queue.shift()
        let node= nodeArr[0]
        console.log(nodeArr[0].value, nodeArr[1])
        
        if(node.left || node.right) {
            level++
        }
        
        if(node.left) {
            queue.push([node.left, level])
        }
        
        if(node.right) {
            queue.push([node.right, level])
        }
    }
}

printTreeBFS(root)

function printTreeDFS(root) {
    return traverseTree(root, 0, [])
}

function traverseTree(node, level, nodes) {
    if(node == null) {
        return nodes
    }
    
    // The traversal types are all based on when we process the root
    
    // nodes.push([node.value, level]) // - PREORDER(root first) - root, left, right
    
    if(node.left) {
        traverseTree(node.left, level+1, nodes)
    }
    
    // nodes.push([node.value, level]) // - INORDER(root middle) - left, root, right
    
    if(node.right) {
        traverseTree(node.right, level+1, nodes)
    }
    
    // nodes.push([node.value, level]) // - POSTORDER(root last) - left, right, root
    
    return nodes
}

console.log(printTreeDFS(root))