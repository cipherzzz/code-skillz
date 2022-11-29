// create a Vertex interface    
interface Vertex {  
    value: string;
    edges: Vertex[];
}

// create a Graph interface
interface Graph {
    vertices: Vertex[];
    addVertex(value: string): void;
    addEdge(value1: string, value2: string): void;  
    bfs(start: string, end: string): string[];
    dfs(start: string, end: string): string[];
}   

// create a function that takes a graph and a value and returns a vertex
function findVertex(graph: Graph, value: string): Vertex | undefined {
    return graph.vertices.find(vertex => vertex.value === value);
}

const graph = { 
    vertices: [],
    addVertex(value: string) {
        this.vertices.push({ value, edges: [] });
    },
    addEdge(value1: string, value2: string) {
        const vertex1 = findVertex(this, value1);
        const vertex2 = findVertex(this, value2);
        if (vertex1 && vertex2) {
            vertex1.edges.push(vertex2);
            vertex2.edges.push(vertex1);
        }
    },
    bfs(start: string, end: string) {
        const startVertex = findVertex(this, start);
        const endVertex = findVertex(this, end);
        if (!startVertex || !endVertex) return [];
        const visited: Vertex[] = [];
        const queue: Vertex[] = [startVertex];
        const path: string[] = [];
        while (queue.length) {
            const current = queue.shift();
            if (current) {
                visited.push(current);
                path.push(current.value);
                if (current === endVertex) return path;
                for (const edge of current.edges) {
                    if (!visited.includes(edge)) queue.push(edge);
                }
            }
        }
        return [];
    },
    dfs(start: string, end: string) {
        const startVertex = findVertex(this, start);
        const endVertex = findVertex(this, end);
        if (!startVertex || !endVertex) return [];
        const visited: Vertex[] = [];
        const stack: Vertex[] = [startVertex];
        const path: string[] = [];
        while (stack.length) {
            const current = stack.pop();
            if (current) {
                visited.push(current);
                path.push(current.value);
                if (current === endVertex) return path;
                for (const edge of current.edges) {
                    if (!visited.includes(edge)) stack.push(edge);
                }
            }
        }
        return [];
    },
};

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');


console.log(graph.bfs('A', 'D')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(graph.dfs('A', 'D')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]