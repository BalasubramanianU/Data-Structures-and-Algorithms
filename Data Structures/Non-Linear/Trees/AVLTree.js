class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    this.insertValue(this.root, value, newNode);
  }

  insertValue(node, value, newNode) {
    if (this.root === null) return (this.root = newNode);
    if (node === null) return;

    if (value > node.value) {
      if (node.rightChild === null) {
        node.rightChild = newNode;
        return;
      }
      this.insertValue(node.rightChild, value, newNode);
    }

    if (value < node.value) {
      if (node.leftChild === null) {
        node.leftChild = newNode;
        return;
      }
      this.insertValue(node.leftChild, value, newNode);
    }
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

let tree = new AVLTree();
tree.insert(1);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.print();
