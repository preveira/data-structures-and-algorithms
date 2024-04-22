'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(node) {
    if (!node) {
      return [];
    }
    const result = [];
    result.push(node.value); //Add the current nodes value to the result array.

    const leftValues = this.preOrder(node.left);
    result.push(...leftValues);

    const rightValues = this.preOrder(node.right);
    result.push(...rightValues);

    return result;
  }
  inOrder(node) {
    if (!node) {
      return [];
    }
    const result = [];

    const leftValues = this.inOrder(node.left);
    result.push(...leftValues);

    result.push(node.value); //Add the current nodes value to the result array.

    const rightValues = this.inOrder(node.right);
    result.push(...rightValues);

    return result;
  }
  postOrder(node) {
    if (!node) {
      return [];
    }
    const result = [];

    const leftValues = this.postOrder(node.left);
    result.push(...leftValues);

    const rightValues = this.postOrder(node.right);
    result.push(...rightValues);

    result.push(node.value); //Add the current nodes valus to the result array

    return result;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const insert = (currentNode, newValue) => {
      if (!currentNode) {
        return new Node(newValue);
      }
      if (newValue < currentNode.value) {
        currentNode.left = insert(currentNode.left, newValue);
      } else {
        currentNode.right = insert(currentNode.right, newValue);
      }
      return currentNode;
    };

    this.root = insert(this.root, value);
  }

  contains(value) {
    const search = (currentNode, searchValue) => {
      if (!currentNode) {
        return false;
      }
      if (currentNode.value === searchValue) {
        return true;
      }
      if (searchValue < currentNode.value) {
        return search(currentNode.left, searchValue);
      } else {
        return search(currentNode.right, searchValue);
      }
    };

    return search(this.root, value);
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
// preOrder(node) {
//   console.log(node.value);
//   if(node.left) {
//     this.preOrder(node.left);
//   }
//   if(node.right) {
//     this.preOrder(node.right);
//   }
// }
// inOrder(node) {
//   if(node.left) {
//     this.inOrder(node.left);
//   }
//   console.log(node.right);
//   if(node.right) {
//     this.inOrder(node.right);
//   }
// }
// postOrder(node) {
//   if(node.left) {
//     this.postOrder(node.left);
//   }
//   if(node.right) {
//     this.postOrder(node.right);
//   }
//   console.log(node.value);
// }

