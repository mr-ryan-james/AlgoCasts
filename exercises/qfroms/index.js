// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  // when we remove things, transfer them to the left, and remove from the right
  // (resetting the right stack)
  leftStack = new Stack();

  //put all elements on the right stack
  rightStack = new Stack();

  add(thing) {
    this.rightStack.push(thing);
  }

  transfer() {
    if (this.leftStack.peek() === undefined) {
      while (this.rightStack.peek()) {
        this.leftStack.push(this.rightStack.pop());
      }
      this.rightStack = new Stack();
    }
  }

  remove() {
    this.transfer();
    return this.leftStack.pop();
  }

  peek() {
    this.transfer();
    return this.leftStack.peek();
  }
}

module.exports = Queue;
