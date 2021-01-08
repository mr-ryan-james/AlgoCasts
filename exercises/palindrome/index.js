// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Mine (first attempt)
// function palindrome(str) {
//   const firstHalf = str.slice(0, Math.ceil(str.length / 2));
//   const secondHalf = str
//     .slice(str.length / 2, str.length)
//     .split("")
//     .reverse()
//     .join("");

//   return firstHalf === secondHalf;
// }

// Mine (second attempt)
// function palindrome(str) {
//   return str === str.split("").reduce((c, r) => r + c, "");
// }

//Stephen's #1
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// Stephen's #2 using "every"
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
