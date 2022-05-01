const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
    this.length = 0;
    this.head = null;
  }
  enqueue(value) {
    let node = new ListNode(value),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }
  dequeue() {
    let current = this.head;

    if (current) {
      this.head = this.head.next;
      this.length--;
      return current.value;
    }
  }
  getUnderlyingList() {
    if (this.head) {
      return this.head;
    }
  }
}

module.exports = {
  Queue,
};
