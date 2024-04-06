'use strict';

const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  test('should properly insert into the linked list', () => {
    list.insert(5);
    expect(list.head.value).toBe(5);
  });

  test('should properly point head to the first node in the linked list', () => {
    list.insert(10);
    list.insert(20);
    expect(list.head.value).toBe(20);
  });

  test('should properly insert multiple nodes into the linked list', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.head.value).toBe(15);
    expect(list.head.next.value).toBe(10);
    expect(list.head.next.next.value).toBe(5);
  });

  test('should return true when finding a value within the linked list that exists', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(10)).toBe(true);
  });

  test('should return false when searching for a value in the linked list that does not exist', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(20)).toBe(false);
  });

  test('should properly return a collection of all the values that exist in the linked list', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.toString()).toEqual('{ 15 } -> { 10 } -> { 5 } -> NULL');
  });
});
