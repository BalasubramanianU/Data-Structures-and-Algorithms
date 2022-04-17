export default class CustomArray {
  constructor(length) {
    this.array = new Array(length);
    this.count = 0;
  }

  insert(number) {
    // Note:- Dynamic array is already there in js, simply putting the line
    // (this.array[this.count++]=number) will do, but just for
    // understanding the runtime complexity wrote the manual way of creating
    // a dynamic array
    if (this.count === this.array.length) {
      this.newArray = new Array(this.count * 2);
      for (let i = 0; i < this.count; i++) {
        this.newArray[i] = this.array[i];
      }
      this.array = this.newArray;
    }

    this.array[this.count++] = number;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return;
    for (let i = index; i < this.count; i++) this.array[i] = this.array[i + 1];
    this.count--;
  }

  findIndex(number) {
    for (let i = 0; i < this.count; i++) {
      if (number === this.array[i]) return i;
    }
    return -1;
  }

  print() {
    if (this.count === 0) return;
    for (let i = 0; i < this.count; i++) {
      console.log(this.array[i]);
    }
    // console.log(this.array);
  }
}

// import CustomArray from "./Data Structures/Arrays/CustomArray";

// let array = new CustomArray(3);
// array.insert(1);
// array.insert(2);
// array.insert(3);
// array.insert(4);
// array.removeAt(2);
// console.log(array.findIndex(4));
// array.print();
