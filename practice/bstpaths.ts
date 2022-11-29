interface TNode {
    val: number;
    left: TNode | null;
    right: TNode | null;
}

// Given a binary tree, return all root-to-leaf paths.
function bstPaths(root: TNode | null): string[] {
  if (!root) return [];
  const result: any[] = [];
  const stack = [[root, root.val.toString()]];
  while (stack.length) {
    const [node, path]:any = stack.pop();
    if (!node.left && !node.right) result.push(path);
    if (node.left) stack.push([node.left, `${path}->${node.left.val}`]);
    if (node.right) stack.push([node.right, `${path}->${node.right.val}`]);
  }
  return result;
}

console.log(bstPaths({ val: 1, left: { val: 2, left: { val:4, left: null, right: null}, right: { val:5, left: null, right: null} }, right: { val: 3, left: null, right: null } }));