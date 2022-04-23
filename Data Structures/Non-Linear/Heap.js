class Heap {
  constructor() {
    this.array = [];
    this.size = 0;
  }

  insert(value) {
    this.array[this.size++] = value;

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.size - 1;
    while (index > 0 && this.array[index] > this.array[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  parent(index) {
    return parseInt((index - 1) / 2);
  }

  swap(first, second) {
    let temp = this.array[first];
    this.array[first] = this.array[second];
    this.array[second] = temp;
  }

  remove() {
    if (this.size === 0) return;
    let removedItem = this.array[0];
    this.array[0] = this.array[--this.size];
    this.array[this.size] = null;
    this.bubbleDown();
    return removedItem;
  }

  bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  largerChildIndex(index) {
    if (!this.hasLeftChild(index)) return index;

    if (!this.hasRightChild(index)) return this.leftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) <= this.size;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) <= this.size;
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) return true;

    if (!this.hasRightChild(index))
      return this.array[index] >= this.leftChild(index);

    return (
      this.array[index] >= this.leftChild(index) &&
      this.array[index] >= this.rightChild(index)
    );
  }

  leftChild(index) {
    return this.array[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.array[this.rightChildIndex(index)];
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  print() {
    console.log(this.array);
  }
}

let heap = new Heap();
heap.insert(17);
heap.insert(5);
heap.insert(10);
heap.insert(4);
heap.insert(2);
console.log(heap.remove());
heap.print();
