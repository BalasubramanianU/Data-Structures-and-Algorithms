class Node {
  constructor(value) {
    this.label = value;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.adjacencyList = new Map();
  }

  // Note:- Whenever you are using get method on map
  // with object as keys, always store the object you
  // want to insert and get in a common variable and
  // then use it in the insert, get methode, otherwise
  // map will return undefined, since in js, object are
  // reference types so, {'a':1} !== {'a':1}
  // (denoting there are 2 different objects in memory),
  // whereas let sampleKey={'a':1} samplekey === samplekey
  // (denoting there is only one object in memory)

  addNode(label) {
    let node = new Node(label);
    if (this.nodes.get(label) === undefined) this.nodes.set(label, node);
    if (this.adjacencyList.get(node) === undefined)
      this.adjacencyList.set(node, []);
  }

  addEdge(from, to) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);
    if (fromNode === undefined) return;
    if (toNode === undefined) return;

    this.adjacencyList.set(fromNode, [
      ...this.adjacencyList.get(fromNode),
      toNode,
    ]);
  }

  print() {
    for (let source of Array.from(this.adjacencyList.keys())) {
      if (this.adjacencyList.get(source).length !== 0)
        console.log(
          source.label,
          " is connected to ",
          this.adjacencyList.get(source).map((s) => s.label)
        );
    }
  }

  removeNode(label) {
    let node = this.nodes.get(label);
    if (node === undefined) return;

    for (let source of Array.from(this.adjacencyList.keys())) {
      this.adjacencyList.set(
        source,
        this.adjacencyList.get(source).filter((e) => e !== node)
      );
    }

    this.adjacencyList.delete(node);
    this.nodes.delete(label);
  }

  removeEdge(from, to) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);

    if (fromNode === undefined || toNode === undefined) return;

    this.adjacencyList.set(
      fromNode,
      this.adjacencyList.get(fromNode).filter((e) => e !== toNode)
    );
  }

  depthFirstTraversal(label) {
    let node = this.nodes.get(label);
    if (node === undefined) return;
    this.traverseDepthFirst(node, new Set());
  }

  traverseDepthFirst(node, visited) {
    console.log("node", node.label);
    visited.add(node.label);

    for (let n of this.adjacencyList.get(node)) {
      if (!visited.has(n.label)) this.traverseDepthFirst(n, visited);
    }
  }

  //   logic is right but queue is not storing object - need to debug
  traverseBreadthFirst(label) {
    // let node = this.nodes.get(label);
    // if (node === undefined) return;
    // let visited = new Set();
    // let queue = new Queue();
    // queue.enqueue(node);
    // while (!queue.isEmpty()) {
    //   let dequeuedNode = queue.dequeue();
    //   if (visited.has(dequeuedNode.label)) continue;
    //   console.log(dequeuedNode.label);
    //   visited.add(dequeuedNode.label);
    //   if (this.adjacencyList.get(dequeuedNode) === undefined) continue;
    //   for (let n of this.adjacencyList.get(dequeuedNode)) {
    //     if (!visited.has(n.label)) queue.enqueue(n);
    //   }
    // }
  }

  hasCycle() {
    let all = new Set();
    let visiting = new Set();
    let visited = new Set();
    for (let node of Array.from(this.nodes.keys())) {
      all.add(this.nodes.get(node));
    }

    for (let n of Array.from(all)) {
      if (this.traverseForCycle(n, all, visiting, visited)) return true;
    }

    return false;
  }

  traverseForCycle(node, all, visited, visiting) {
    all.delete(node);
    visiting.add(node);

    for (let n of Array.from(this.adjacencyList.get(node))) {
      if (visited.has(n)) continue;

      if (visiting.has(n)) return true;
      if (this.traverseForCycle(n, all, visited, visiting)) return true;
    }

    visiting.delete(node);
    visited.add(node);
    return false;
  }
}

let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
// graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
// graph.addEdge("D", "A");
//   graph.removeNode("A");
//   graph.addEdge("B", "C");

//   graph.depthFirstTraversal("A")
// graph.traverseBreadthFirst("A");
console.log(graph.hasCycle());

graph.print();
//   console.log(graph.nodes);
//   console.log(graph.adjacencyList);

//   const map1 = new Map();
//   map1.set({ a: "1" }, [1]);

// console.log([...map1.keys()])
// console.log(map1.set(1,[...map1.get(1),2]))
// console.log(map1.get(1))

//   for (let s of Array.from(map1.keys())) {
//     console.log("s:", s);
//     console.log(map1.get(s));
//   }
