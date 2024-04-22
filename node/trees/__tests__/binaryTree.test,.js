const { BinaryTree, BinarySearchTree, Node } = require('../trees.js');

describe('Binary Tree Tests', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBe(null);
    expect(tree.root.right).toBe(null);
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('Can successfully return a collection from a pre-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    const preOrderValues = bst.preOrder(bst.root);
    expect(preOrderValues).toEqual([10, 5, 15]);
  });

  test('Can successfully return a collection from an in-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    const inOrderValues = bst.inOrder(bst.root);
    expect(inOrderValues).toEqual([5, 10, 15]);
  });

  test('Can successfully return a collection from a post-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    const postOrderValues = bst.postOrder(bst.root);
    expect(postOrderValues).toEqual([5, 15, 10]);
  });

  test('Returns true/false for the contains method, given an existing or non-existing node value', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);

    expect(bst.contains(20)).toBe(false);
  });
});
