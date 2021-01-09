// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildCharacterMap(str) {
  const chars = {};
  for (const char of str) {
    chars[char] = char[char] + 1 || 1;
  }
  return chars;
}

const noPunctuation = /\w/g;

// Mine
function anagrams_ryan(stringA, stringB) {
  const strAChars = buildCharacterMap(
    stringA.match(noPunctuation).join("").toLowerCase()
  );
  const strBChars = buildCharacterMap(
    stringB.match(noPunctuation).join("").toLowerCase()
  );

  const aKeys = Object.keys(strAChars);
  const bKeys = Object.keys(strBChars);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((akey) => strAChars[akey] === strBChars[akey]);
}

// Stephen's
// first solution
function buildCharMap(str) {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams_first(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function sortMethod(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
}

// My second solution using numbers.sort()
function anagrams_ryan_sort(stringA, stringB) {
  //I could also use .replace, and keep it as a string
  //(this method changes it to an array, which drives future decisions)
  const cleanA = stringA.match(/\w/g).sort(sortMethod);
  const cleanB = stringB.match(/\w/g).sort(sortMethod);

  if (cleanA.length !== cleanB.length) {
    return false;
  }

  //.every would work here also
  return (
    cleanA
      .reduce((s, c) => s + c.toLowerCase(), "")
      .localeCompare(cleanB.reduce((s, c) => s + c.toLowerCase(), "")) === 0
  );
}

//Stephens sort solution
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

anagrams("Whoa! Hi!", " Hi! Whoa!");

module.exports = anagrams;
