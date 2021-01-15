// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      const previousHead = this.head;
      this.head = new Node(data, previousHead);
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let counter = 1;
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last !== null) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  removeAt(index) {
    if (this.head === null) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (previous === null || previous.next === null) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(index - 1);

    if (previous === null) {
      previous = this.getLast();
    }

    const oldNext = previous.next;
    previous.next = new Node(data, oldNext);
  }

  forEach(func) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      func(current, counter);
      counter++;
      current = current.next;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
