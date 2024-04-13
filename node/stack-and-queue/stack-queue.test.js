const { Stack, Queue } = require('./stack-and-queue');

describe('Stack Tests', () => {
  test('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('A');
    expect(stack.peek()).toBe('A');
  });

  test('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    stack.push('C');
    expect(stack.peek()).toBe('C');
  });

  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    expect(stack.pop()).toBe('B');
    expect(stack.peek()).toBe('A');
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    expect(stack.peek()).toBe('B');
  });

  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow();
    expect(() => stack.peek()).toThrow();
  });
});

describe('Queue Tests', () => {
  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    expect(queue.peek()).toBe('A');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    expect(queue.peek()).toBe('A');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    expect(queue.dequeue()).toBe('A');
    expect(queue.peek()).toBe('B');
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    expect(queue.peek()).toBe('A');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow();
    expect(() => queue.peek()).toThrow();
  });
});
