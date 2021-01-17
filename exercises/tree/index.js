// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.splice(
      this.children.indexOf((n) => n.data === data),
      1
    );
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(func) {
    let stuff = [this.root];
    while (stuff.length > 0) {
      const node = stuff.shift();

      stuff.push(...node.children);
      func(node);
    }
  }

  traverseDF(func) {
    const depthFirst = function (node) {
      func(node);
      for (const child of node.children) {
        depthFirst(child);
      }
    };

    depthFirst(this.root);

    // also works
    // let stuff = [this.root];
    // while (stuff.length > 0) {
    //   const node = stuff.shift();

    //   stuff.unshift(...node.children);
    //   func(node);
    // }
  }
}

module.exports = { Tree, Node };
