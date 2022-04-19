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
    this.count = 0;
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

  // Breadth First Search (level order)
  // wrong - need to update
  traverseLevelOrder(node = this.root) {}

  // Depth First Search
  traversePreOrder(root = this.root) {
    if (root === null) return;

    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrder(root = this.root) {
    if (root === null) return;

    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root = this.root) {
    if (root === null) return;

    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  }

  height(root = this.root) {
    if (root === null) return -1;
    if (root.leftChild === null && root.rightChild === null) return 0;

    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }

  // O(n) - need to traverse every node in the tree to find min
  min(root = this.root) {
    if (root.leftChild === null && root.rightChild === null) return root.value;
    if (root.leftChild === null) return root.rightChild.value;
    if (root.rightChild === null) return root.leftChild.value;
    return Math.min(
      this.root.value,
      Math.min(this.min(root.leftChild), this.min(root.rightChild))
    );
  }

  // when we find min value in a binary search tree, O(log n)
  // because we simply need to find out the left most node
  // similarly for max value as well.

  equals(tree) {
    if (tree === null) return false;
    return this.findEquality(this.root, tree.root);
  }

  findEquality(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.value !== root2.value) return false;

    return (
      this.findEquality(root1.leftChild, root2.leftChild) &&
      this.findEquality(root1.rightChild, root2.rightChild)
    );
  }

  isBinarySearchTree() {
    if (this.root === null) return false;
    return this.validateBinaryTree(
      this.root,
      Number.MIN_VALUE,
      Number.MAX_VALUE
    );
  }

  validateBinaryTree(node, min, max) {
    if (node === null) return true;

    return (
      node.value > min &&
      node.value < max &&
      this.validateBinaryTree(node.leftChild, min, node.value) &&
      this.validateBinaryTree(node.rightChild, node.value, max)
    );
  }

  swapRoot() {
    let temp = this.root.leftChild;
    this.root.leftChild = this.root.rightChild;
    this.root.rightChild = temp;
  }

  nodesAtKDistance(distance) {
    return this.findNodesAtDistance(this.root, distance);
  }

  findNodesAtDistance(node, distance) {
    if (node === null) return;
    if (distance === 0) console.log(node.value);
    this.findNodesAtDistance(node.leftChild, distance - 1);
    this.findNodesAtDistance(node.rightChild, distance - 1);
  }

  size(root = this.root) {
    if (root === null) return;
    this.count++;
    this.size(root.leftChild);
    this.size(root.rightChild);
    return this.count;
  }

  countLeaves(node = this.root) {
    if (node === null) return;
    if (node.rightChild === null && node.leftChild === null)
      return console.log(node.value);
    this.countLeaves(node.leftChild);
    this.countLeaves(node.rightChild);
  }

  max(node = this.root) {
    if (node === null) return;
    if (node.rightChild === null) return console.log(node.value);
    this.max(node.rightChild);
  }

  // the same find method but using recursion
  contains(value) {
    return this.findUsingRecursion(this.root, value);
  }

  findUsingRecursion(node, value) {
    if (node === null) return;
    if (node.value !== value) return false;
    return (
      node.value === value ||
      this.findUsingRecursion(node.leftChild, value) ||
      this.findUsingRecursion(node.rightChild, value)
    );
  }

  areSibling(first, second) {
    return this.findSibling(this.root, first, second);
  }

  findSibling(node, first, second) {
    if (node === null) return;
    if (node.leftChild === null || node.rightChild === null) return;
    if (
      (node.leftChild.value === first || node.leftChild.value === second) &&
      (node.rightChild.value === first || node.rightChild.value === second)
    )
      return true;
    this.findSibling(node.leftChild, first, second);
    this.findSibling(node.rightChild, first, second);
    return false;
  }

  getAncestors(value) {
    this.findAncestors(this.root, value);
  }

  findAncestors(node, value) {
    if (node === null) return;
    if (node.value === value) return true;

    if (
      this.findAncestors(node.leftChild, value) ||
      this.findAncestors(node.rightChild, value)
    ) {
      console.log(node.value);
      return true;
    }
    return false;
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

let tree = new BinaryTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(6);
tree.insert(14);
tree.insert(24);
tree.insert(3);
tree.insert(8);
tree.insert(26);
//   console.log(tree.find(4));
//   tree.print();
//   tree.traversePreOrder();
//   tree.traverseInOrder();
//   tree.traversePostOrder();
tree.traverseLevelOrder();
// console.log(tree.height())
// console.log(tree.min())
// tree.swapRoot(); // to make it a non - binary search tree
// console.log(tree.isBinarySearchTree())
//   tree.nodesAtKDistance(2);
//   console.log(tree.size())
// tree.countLeaves();
// tree.max();
// console.log(tree.contains(3))
// console.log(tree.areSibling(2,6))
// tree.getAncestors(15);

// let tree2 = new BinaryTree();
//   tree2.insert(4);
//   tree2.insert(2);
//   tree2.insert(6);
// //   tree2.insert(3);
//   tree2.insert(1);
// //   tree2.equals(tree);
//   console.log('tree2.equals(tree):', tree2.equals(tree))
