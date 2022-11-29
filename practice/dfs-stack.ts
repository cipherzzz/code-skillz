interface BSTNode {
    value: number;
    left: BSTNode | null;
    right: BSTNode | null;
}

function traverseBSTQueue(root: BSTNode, value: number): number[] {
    if(!root) {
        return []
    }

    let depth = 0
    const results: number[] = []
    const stack = [root]
    while(stack.length) {
        const node = stack.pop()
        if(node) {
            depth++
            results.push(node.value)
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
    }

    console.log(depth)
    return results
}   

const results = traverseBSTQueue({ value: 1, left: { value: 2, left: { value:4, left: null, right: null}, right: { value:5, left: null, right: null} }, right: { value: 3, left: null, right: null } }, 5)
console.log(results)