// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  stuff = [];

  push(thing) {
    this.stuff.unshift(thing);
  }

  pop() {
    return this.stuff.shift();
  }

  peek() {
    return this.stuff[0];
  }
}

module.exports = Stack;
