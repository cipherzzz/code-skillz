class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
    this.visited = {}
  }
  addVertex(node) {
    if (!node || typeof node !== 'string' || node.length == 0) {
      return false
    }

    const newNode = this.adjacentList[node]
    if (!newNode) {
      this.adjacentList[node] = []
      this.numberOfNodes++
      return true
    } else {
      return false
    }
  }

  addEdge(node1, node2) {

    // if(!node1 || typeof node !== 'string' || node1.length == 0) {
    //   return false
    // }

    // if(!node2 || typeof node2 !== 'string' || node2.length == 0) {
    //   return false
    // }

    const vertex1 = this.adjacentList[node1]
    const vertex2 = this.adjacentList[node2]

    // if(!vertex1 || !vertex2) {
    //   return false
    // }

    if (vertex1.indexOf(node2) == -1) {
      vertex1.push(node2)
    }

    if (vertex2.indexOf(node1) == -1) {
      vertex2.push(node1)
    }

  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }

  hasNodeBFS(source, destination) {
    let hasPath = this.askChildrenBFS(source, destination)
    this.visited = {}
    return hasPath
  }

  askChildrenBFS(source, destination) {
    let queue = []
    queue.push(source)

    while (queue.length != 0) {
      let node = queue.shift()
      if (node == destination) {
        return true
      }

      if (this.visited[node] == true) {
        continue
      }
      this.visited[node] = true

      let adjacents = this.adjacentList[node]
      for (let vertex of adjacents) {
        queue.unshift(vertex)
      }
    }

    return false
  }

  hasNodeDFS(source, destination) {
    let hasPath = this.askChildrenDFS(source, destination)
    this.visited = {}
    return hasPath
  }

  askChildrenDFS(source, destination) {

    if (this.visited[source] == true) {
      return false
    }
    this.visited[source] = true
    if (source == destination) {
      return true
    }

    let nodeConnections = this.adjacentList[source];
    for (let vertex of nodeConnections) {
      if (this.askChildrenDFS(vertex, destination) == true) {
        return true
      }
    }

    return false

  }

}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
console.log(myGraph.hasNodeDFS('1', '6'))
console.log(myGraph.hasNodeBFS('1', '6'))
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5