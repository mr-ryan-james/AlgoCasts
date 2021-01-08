// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// mine
function reverse(str) {
  let newStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    newStr += element;
    debugger;
  }
  return newStr;
}

// solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution 2
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     //            👇         👇
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// solution 3
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

reverse("abc");

module.exports = reverse;
