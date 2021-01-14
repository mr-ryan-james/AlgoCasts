// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const v = /[aeiou]/gi;

function vowels(str) {
  return str.match(v)?.length ?? 0;
}

// Stephen's #1
function vowels_stephen_increment(str) {
  let count = 0;
  let aeiou = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) {
    if (aeiou.includes(char)) {
      count++;
    }
  }
  return count;
}

// Stephen's #2
function vowels_stephen_regex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels_stephen_regex;
