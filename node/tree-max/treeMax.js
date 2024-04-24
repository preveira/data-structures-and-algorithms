class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaximumValue() {
    const findMax = (node) => {
      if (!node) {
        return -Infinity;
      }

      const currentMax = node.value;
      const leftMax = findMax(node.left);
      const rightMax = findMax(node.right);

      return Math.max(currentMax, leftMax, rightMax);
    };

    return findMax(this.root);
  }
}
