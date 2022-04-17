class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    // this.items.push(item)
    this.items[this.count++] = item;
  }

  pop() {
    if (this.isEmpty()) return;
    // this.items.pop();
    let poppedItem = this.items[this.count - 1];
    this.items[this.count - 1] = undefined;
    this.count--;
    return poppedItem;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  printStack() {
    if (this.isEmpty()) return;
    // this.items.forEach(element => {
    //     if(element) console.log(element)
    // });
    console.log(this.items);
  }
}

let stack = new Stack();
//   stack.push(1);
//   stack.push(2);
//   stack.pop();
//   console.log(stack.printStack());

// reverse a string using stack
// let str="abc";
// for(let i=0;i<str.length;i++) stack.push(str[i]);
// let reversed='';
// while(!stack.isEmpty()) reversed=reversed+stack.pop();
// console.log('reversed:', reversed)

// bracket pair
function isBalanced(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{" || str[i] === "<")
      stack.push(str[i]);
    else if (str[i] === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") return false;
    } else if (str[i] === "]") {
      if (stack.isEmpty() || stack.pop() !== "[") return false;
    } else if (str[i] === "}") {
      if (stack.isEmpty() || stack.pop() !== "{") return false;
    } else if (str[i] === ">") {
      if (stack.isEmpty() || stack.pop() !== "<") return false;
    }
  }
  return stack.isEmpty();
}

let str = "(([1] + 2))[<{}>]";
console.log("balanced:", isBalanced(str));
