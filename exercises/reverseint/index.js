// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Mine
// function reverseInt(n) {
//   const strN = `${n}`;
//   if (n >= 0) {
//     return parseInt(strN.split("").reduce((c, r) => r + c, ""));
//   }

//   const reversed = strN
//     .split("")
//     .slice(1, strN.length)
//     .reduce((c, r) => r + c, "");
//   return parseInt(`-${reversed}`);
// }

// My second attempt
function reverseInt(n) {
  return (
    Math.sign(n) *
    n
      .toString()
      .split("")
      .slice(Math.sign(n) === -1 ? 1 : 0)
      .reduce((c, r) => r + c, "")
  );
}

// Stephen's
// function reverseInt(n) {
//is the same as mine
// }

module.exports = reverseInt;
