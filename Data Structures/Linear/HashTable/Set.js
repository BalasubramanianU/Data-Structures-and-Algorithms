// a set stores only unique keys

let s = new Set();

s.add(1);
s.add(2);
s.add(3);
s.add(1);
s.delete(1);

console.log(s);
console.log(s.has(2));

s.clear();
console.log(s);
