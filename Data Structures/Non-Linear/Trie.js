class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }

  getChildren() {
    return Object.values(this.children);
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      if (current.children[word[i]] === undefined)
        current.children[word[i]] = new Node(word[i]);
      current = current.children[word[i]];
    }
    current.isEndOfWord = true;
  }

  contains(word) {
    if (word === null) return false;

    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      if (current.children[word[i]] === undefined) return false;
      current = current.children[word[i]];
    }
    return current.isEndOfWord;
  }

  traverse(node = this.root) {
    // // Pre-order
    // console.log(node.value)
    // node.getChildren().forEach(child=>this.traverse(child))

    // Post-order
    node.getChildren().forEach((child) => this.traverse(child));
    console.log(node.value);
  }

  delete(word, node = this.root, index = 0) {
    if (word === null) return;
    if (index === word.length) return (node.isEndOfWord = false);

    let ch = word[index];
    let child = node.children[ch];
    if (child === undefined) return;

    this.delete(word, child, index + 1);
    if (child.getChildren().length === 0 && !child.isEndOfWord) child = null;
  }

  autoCompletion(word) {
    if (word === null) return;
    let words = [];
    let lastNode = this.findLastNodeOf(this.root, word);
    if (lastNode === undefined) return;
    this.findWords(lastNode, word, words);
    return words;
  }

  findWords(node, str, words) {
    if (node.isEndOfWord) words.push(str);
    node.getChildren().forEach((child) => {
      this.findWords(child, str + child.value, words);
    });
  }

  findLastNodeOf(node, word) {
    let current = node;
    for (let i = 0; i < word.length; i++) {
      let child = current.children[word[i]];
      if (child === undefined) return;
      current = child;
    }
    return current;
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

let trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("card");
trie.insert("canada");
trie.insert("care");
trie.insert("carefree");
trie.insert("eg");
//   trie.delete("cat");
//   console.log(trie.contains("cat"));
// trie.traverse();
console.log(trie.autoCompletion(""));

// trie.print();
