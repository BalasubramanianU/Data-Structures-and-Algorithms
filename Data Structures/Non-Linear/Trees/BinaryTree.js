class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) return;
      if (value < current.value) {
        if (current.leftChild === null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      }
      if (value > current.value) {
        if (current.rightChild === null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) current = current.leftChild;
      if (value > current.value) current = current.rightChild;
    }
    return false;
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(10);
tree.insert(1);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(7);
console.log(tree.find(4));
tree.print();
