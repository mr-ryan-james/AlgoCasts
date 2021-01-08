// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Mine
// function maxChar(str) {
//   const dict = {};
//   for (const char of str) {
//     if (dict[char] === undefined) {
//       dict[char] = 0;
//     }

//     dict[char] = dict[char] + 1;
//   }

//   //b - a for desc, a - b for asc
//   return Object.entries(dict).sort((a, b) => b[1] - a[1])[0][0];
// }

//Stephens
function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";
  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
