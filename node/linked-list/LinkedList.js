'use strict';

//Our container that stores values, and references to another node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Singly linked class, stores a head node
class LinkedList {
  constructor() {
    this.head = null;
  }
  // read all the values in the list
  traverse() {
    let currentNode = this.head;
    while(currentNode instanceof Node) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('Traversal Complete');
    return(currentNode);
  }
  //add a new value to the head of the list
  prepend(value) {
    let node = new Node(value);
    if(this.head instanceof Node) {
      node.next = this.head;
    }
    this.head = node;
  }
  //add a value at the tail of the list
  append(value) {
    let node = new Node(value);
    let current = this.head;
    while(current.next instanceof Node) {
      current = current.next;
    }
    current.next = node;
  }

  // Inserts a new node with the given value to the head of the list
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Checks whether the list contains a node with the given value
  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Returns a string representation of the linked list
  toString() {
    let result = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    result += 'NULL';
    return result;
  }
}




let list = new LinkedList();

list.prepend('Sandwhich');
list.prepend('First Aid');
list.prepend('Sun Screen');

list.append('Flare Gun');

console.log(list.toString());

console.log('Includes "Sunscreen":', list.includes('Sunscreen'));
console.log('Includes "Bandage":', list.includes('Bandage'));

// list.head = new Node('Sandwhich');
// list.head.next = new Node('First Aid');
// list.head.next.next = new Node('Sun Screen');


// console.log('My list', JSON.stringify(list));
list.traverse();
console.log('here is the head', list.head);

module.exports = LinkedList;
