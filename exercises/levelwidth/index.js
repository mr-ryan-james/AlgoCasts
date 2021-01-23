// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const count = [];

  let stuff = [root, "X"];

  count.push(0);
  while (stuff.length > 1) {
    const nextChild = stuff.shift();

    if (nextChild.children !== undefined) {
      stuff.push(...nextChild.children);
      count[count.length - 1]++;
    } else {
      count.push(0);
      stuff.push("X");
    }
  }
  return count;
}

module.exports = levelWidth;
