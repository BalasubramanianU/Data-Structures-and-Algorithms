class Queue {
  constructor() {
    this.items = [];
    this.front;
    this.rear;
    this.frontIndex = 0;
  }

  enqueue(item) {
    if (this.isEmpty()) {
      this.items.push(item);
      this.front = this.rear = this.items[0];
      return;
    }
    this.items.push(item);
    this.rear = this.items.length;
  }

  dequeue() {
    this.front = ++this.frontIndex;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  reverse() {
    let reversed = [];
    let j = 0;
    for (let i = this.items.length - 1; i >= 0; i--)
      reversed[j++] = this.items[i];
    return reversed;
  }

  print() {
    let res = [];
    for (let i = this.frontIndex; i < this.rear; i++) {
      res.push(this.items[i]);
    }
    console.log(res);
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
// console.log(queue.reverse())
