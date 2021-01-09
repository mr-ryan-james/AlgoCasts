// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// mine
function chunk_ryan(array, size) {
  const chunks = [];

  for (let a = 0; a < array.length; a = a + size) {
    const inner = [];
    for (let s = 0; s < size; s++) {
      const element = array[a + s];

      if (element === undefined) {
        break;
      }

      inner.push(element);
    }
    chunks.push(inner);
  }
  return chunks;
}

// Stephen's
// function chunk(array, size) {
//   const chunked = [];

//   for (const element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

//Stephen alternate
function chunk(array, size) {
  const chunked = [];
  for (let index = 0; index < array.length; index += size) {
    chunked.push(array.slice(index, index + size));
  }

  return chunked;
}

module.exports = chunk;
