// Hashtable can be 2 types in js,
// 1. an simple js object eg.{}
// 2. let m = new Map()
// diff. is map is iterable

// how a hashtable is formed:-
// gets a key and value
// 1.it will be storing all the key value pair in an Array
// 2.it will be using the key to determine under which
//   index of the array we should store the pair
// 3.we cant directly use the key as a index, suppose if the
//   key is a very large number then we would be unnecessarily
//   creating a huge array.
// 4.Hence, we get the key and we map it to a number which is
//   within a range of the array by using a hash fn. and
//   use it as an index to store the pair.
// 5.Hashing is we map a certain value to a certain value using
//   a logic.
// 6.It is quite possible to get the same index of an array for
//   two disticnt keys and it is called collision.
// 7.To handle collision
//                 |
//               |   |
//         chaining  open addressing
//             |           |
// storing the pair      openly searching for another index
// as a linked list      to store the pair
// inside that                          |
// array's index                |       |        |
// and if collision          linear   quadratic  double
// happens for that          probing  probing    hashing
// index, a new Node
// in the linked list
// will be created.

// pattern:= whenever we want to map a out of range value to a
// value which is in range, we can use the logic
// out of range value % range length gives a value which is in range

// This can be used as a hashing algo. for the hash table.
// lets say array length is 5 and the key is 7, when we use this
// hash alg. 7 % 5 = 2 , we can store it in 2nd index of the array

let collection = {};
// first non-repeating char.
let str = "green apple";
for (let i = 0; i < str.length; i++)
  collection[str[i]] = (collection[str[i]] || 0) + 1;

for (let i of Object.keys(collection))
  if (collection[i] === 1) {
    console.log(i);
    break;
  }

// first repeating char.
for (let i of Object.keys(collection))
  if (collection[i] > 1) {
    console.log(i);
    break;
  }

// same using map
let map = new Map();
let s = "a green apple";
for (let i = 0; i < s.length; i++) {
  let count = map.get(s[i]) ? map.get(s[i]) : 0;
  map.set(s[i], count + 1);
}

for (let [key, value] of map)
  if (value === 1) {
    console.log(key);
    break;
  }
