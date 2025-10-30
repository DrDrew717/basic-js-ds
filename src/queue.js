const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null;
    this.lastElement = null;
  }

  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    const newElement = {value: value, next: null};
    if (this.firstElement) {
      this.lastElement.next = newElement;
      this.lastElement = newElement;
    } else {
      this.firstElement = newElement;
      this.lastElement = newElement;
    }
  }

  dequeue() {
    if (!this.firstElement) return undefined;
    const result = this.firstElement.value;
    this.firstElement = this.firstElement.next;
    if (!this.firstElement) this.lastElement = null;
    return result;
  }
}

module.exports = {
  Queue
};
