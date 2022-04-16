class PriorityQueue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  enqueue(item) {
    if (this.items.length === 0) return this.items.push(item);
    let i;
    for (i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i] > item) this.items[i + 1] = this.items[i];
      else break;
    }
    this.items[i + 1] = item;
  }

  dequeue() {
    this.front++;
  }

  print() {
    let res = [];
    for (let i = this.front; i < this.items.length; i++) {
      res.push(this.items[i]);
    }
    console.log(res);
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(2);
priorityQueue.enqueue(3);
priorityQueue.enqueue(5);
priorityQueue.enqueue(1);
//   priorityQueue.enqueue(6);
// priorityQueue.enqueue(4);
//   priorityQueue.dequeue();
priorityQueue.print();
