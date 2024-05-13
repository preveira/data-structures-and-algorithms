'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  getHash(key) {
    let asciiSum = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (asciiSum * 599) % this.size;
  }

  set(key, value) {
    let address = this.getHash(key);

    if (this.buckets[address]) {
      let node = this.buckets[address].find(key);
      if (node) {
        node.value = value;
      } else {
        this.buckets[address].add(key, value);
      }
    } else {
      let list = new LinkedList();
      list.add(key, value);
      this.buckets[address] = list;
    }
  }

  get(key) {
    let address = this.getHash(key);

    if (this.buckets[address]) {
      let node = this.buckets[address].find(key);
      if (node) {
        return node.value;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }


  has(key) {
    let address = this.getHash(key);
    return !!this.buckets[address] && !!this.buckets[address].find(key);
  }

  keys() {
    let keys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        keys = keys.concat(bucket.keys());
      }
    }
    return keys;
  }
}

let table = new HashTable(1024);

table.set('name', 'Kawika');
table.set('name', 'John');
table.set('age', 34);
table.set('age', 54);
table.set('shoes', 'orange');
table.set('shoes', 'blue');
let value = table.get('age');

console.log(table);
console.log('Value of "age":', value);
console.log('Has key "age"?', table.has('age'));
console.log('Has key "gender"?', table.has('gender'));
console.log('Keys:', table.keys());

module.exports = HashTable;
