const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = {data: data, left: null, right: null};
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    } 
    let currentNode = this.rootNode;
    while(true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        break;
      }
    } 
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(data) {
    let currentNode = this.rootNode;
    let parentNode = null;
    while (currentNode !== null && currentNode.data !== data) {
      parentNode = currentNode;
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    if (currentNode === null) return;
    if (!currentNode.left && !currentNode.right) {
      if (!parentNode) {
        this.rootNode = null;
      } else if (parentNode.left === currentNode) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
      return;
    }
    if (currentNode.left && !currentNode.right) {
      if (!parentNode) {
        this.rootNode = currentNode.left;
      } else if (parentNode.left === currentNode) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }
      return;
    }
    if (!currentNode.left && currentNode.right) {
      if (!parentNode) {
        this.rootNode = currentNode.right;
      } else if (parentNode.left === currentNode) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }
      return;
    }
    let minParent = currentNode;
    let minNode = currentNode.right;
    while (minNode.left !== null) {
      minParent = minNode;
      minNode = minNode.left;
    }
    currentNode.data = minNode.data;
    if (minParent.left === minNode) {
      minParent.left = minNode.right;
    } else {
      minParent.right = minNode.right;
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};