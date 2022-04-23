class Node {
  constructor(value) {
    this.value = value;
    this.height = 0;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertValue(this.root, value);
  }

  insertValue(node, value) {
    if (node === null) return new Node(value);

    if (value < node.value) {
      node.leftChild = this.insertValue(node.leftChild, value);
    }
    if (value > node.value) {
      node.rightChild = this.insertValue(node.rightChild, value);
    }

    this.setHeight(node);

    return this.balance(node);
  }

  balance(node) {
    if (this.isLeftHeavy(node)) {
      if (this.balanceFactor(node.leftChild) < 0)
        node.leftChild = this.leftRotate(node.leftChild);
      return this.righRotate(node);
    } else if (this.isRightHeavy(node)) {
      if (this.balanceFactor(node.rightChild) > 0)
        node.rightChild = this.righRotate(node.rightChild);
      return this.leftRotate(node);
    }
    return node;
  }

  leftRotate(node) {
    let newRoot = node.rightChild;
    node.rightChild = newRoot.leftChild;
    newRoot.leftChild = node;

    this.setHeight(node);
    this.setHeight(newRoot);

    return newRoot;
  }

  righRotate(node) {
    let newRoot = node.leftChild;
    node.leftChild = newRoot.rightChild;
    newRoot.rightChild = node;

    this.setHeight(node);
    this.setHeight(newRoot);

    return newRoot;
  }

  setHeight(node) {
    node.height =
      1 + Math.max(this.height(node.leftChild), this.height(node.rightChild));
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }

  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balanceFactor(node) {
    return node === null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  }

  height(node) {
    return node === null ? -1 : node.height;
  }

  isBalanced(node = this.root) {
    return true;
    return false;
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

let tree = new AVLTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
//   tree.insert(4);
tree.print();
console.log(tree.isBalanced());
