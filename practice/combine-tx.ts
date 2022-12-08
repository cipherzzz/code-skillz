const txs = [{a: 1, b: 2}, {a: 3, b: 2}, {a: 1, b: 6}, {a: 2, b: 5}];

// create graph of transactions
const graph = txs.reduce((acc, tx) => {
    const {a, b} = tx;
    if (!acc[a]) {
        acc[a] = [];
    }
    acc[a].push(b);
    return acc;
    }, {});

// find all paths
const paths: any = [];
const findPaths = (start: number, end: number, path: number[] = []) => {
    path = [...paths, start];
    if (start === end) {
        paths.push(path);
    } else if (graph[start]) {
        for (let node of graph[start]) {
            findPaths(node, end, path);
        }
    }
}

// find all paths from 1 to 5
findPaths(1, 5);

console.log(paths)