const { LinkedList } = require('./LinkedListInsertion');


describe('Linked List', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    expect(linkedList.head.data).toBe(1);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    let current = linkedList.head;
    expect(current.data).toBe(1);
    expect(current.next.data).toBe(2);
    expect(current.next.next.data).toBe(3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.insertBefore(3, 2);
    let current = linkedList.head;
    expect(current.next.data).toBe(2);
    expect(current.next.next.data).toBe(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(2);
    linkedList.insertBefore(2, 1);
    expect(linkedList.head.data).toBe(1);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.insertAfter(1, 2);
    let current = linkedList.head;
    expect(current.next.data).toBe(2);
    expect(current.next.next.data).toBe(3);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);
    let current = linkedList.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.data).toBe(3);
  });
});
