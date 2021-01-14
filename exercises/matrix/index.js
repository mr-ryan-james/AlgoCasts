// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const resultMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let index = startColumn; index <= endColumn; index++) {
      resultMatrix[startRow][index] = counter;
      counter++;
    }
    startRow++;
    for (let index = startRow; index <= endRow; index++) {
      resultMatrix[index][endColumn] = counter;
      counter++;
    }
    endColumn--;
    for (let index = endColumn; index >= startColumn; index--) {
      resultMatrix[endRow][index] = counter;
      counter++;
    }
    endRow--;
    for (let index = endRow; index >= startRow; index--) {
      resultMatrix[index][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return resultMatrix;
}

module.exports = matrix;
