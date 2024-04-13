'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next= null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);
    if (this.top) { //looks at the current top node
      node.next = this.top; //moves the top to the next node
    }
    this.top = node; //sets node to the new current top
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    let value = this.top.value; //value is a temp holder for the node to be removed
    this.top = this.top.next; //moves the top downwards in the stack
    return value;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top ? this.top.value : null;
  }
  isEmpty() {
    return this.top === null;
  }
}



class Queue {
  constructor() {
    this.front = null;
    this.back= null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.back) {
      node.next = this.back;
    }
    if (!this.back) {
      this.front = node;
    }
    this.back = node;
  }
  dequeue() {
    if (this.back === this.front) {
      let value = this.front.value;
      this.front = null;
      this.back = null;
      return value;
    }
    let current = this.back; //set current to equal to the back
    while(current.next !== this.front) { //while current.next is not equal to the front
      current = current.next; //move to the next node
    }
    //current should be the node right befre the front
    let value = current.next.value; //grabs the value of the next node and stores in value
    current.next = null;
    this.front = current;
    return value;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front ? this.front.value : null;
  }
  isEmpty() {
    return this.front === null;
  }
}


let stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');

let value1 = stack.pop;
let value2 = stack.pop;

console.log(value1, value2, stack);

let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

let value = queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(value, queue);

module.exports ={ Stack, Queue };
