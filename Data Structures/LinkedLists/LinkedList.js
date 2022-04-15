class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  addFirst(item) {
    let node = new Node(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this._size++;
  }

  addLast(item) {
    let node = new Node(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      this.last.next = node;
      this.last = node;
    }
    this._size++;
  }

  deleteFirst() {
    if (this.isEmpty()) return;
    if (this.first === this.last) {
      this.first = this.last = null;
      this._size--;
      return;
    }
    let nextNode = this.first.next;
    this.first.next = null;
    this.first = nextNode;
    console.log("_size:", this._size);
    this._size--;
    console.log("_size:", this._size);
  }

  deleteLast() {
    if (this.isEmpty()) return;
    if (this.first === this.last) {
      this.first = this.last = null;
      this._size--;
      return;
    }
    let prevNode;
    let current = this.first;
    while (current !== this.last) {
      prevNode = current;
      current = current.next;
    }
    prevNode.next = null;
    this.last = prevNode;
    this._size--;
  }

  indexOf(item) {
    let index = 0;
    let current = this.first;
    while (current !== null) {
      if (current.value === item) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  contains(item) {
    return this.indexOf(item) !== -1;
  }

  size() {
    return this._size;
  }

  reverse() {
    if (this.isEmpty()) return;
    let previous = this.first;
    let current = this.first.next;
    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.last = this.first;
    this.last.next = null;
    this.first = previous;
    return this.first;
  }

  getKthNodeFromTheEnd(k) {
    if (k <= 0) return;
    let index = 0;
    let start = this.first;
    let end;
    let current = this.first;
    while (current !== null) {
      if (index === k - 1) end = current;
      if (index >= k) {
        start = start.next;
        end = end.next;
      }
      current = current.next;
      index++;
    }
    if (k > index) return;
    return start.value;
  }
}

let eg = new LinkedList();
eg.addFirst(1);
// eg.addFirst(8);
eg.addLast(2);
eg.addLast(3);
eg.addLast(4);
// eg.deleteFirst();
// eg.deleteLast();

// console.log(eg.first)
// console.log(eg.last)
// console.log(eg.indexOf(8))
// console.log(eg.contains(3))
// console.log(eg.size())
// console.log(eg.reverse());
// console.log(eg.first);
// console.log(eg.last);
console.log(eg.getKthNodeFromTheEnd(4));
