// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

//Ryan
function pyramid_ryan(n, row = 1, level = "") {
  if (row > n) {
    return;
  }

  const howManyCharactersAlready = level.length;
  const pyramidTotal = 2 * row - 1;
  const levelTotal = 2 * n - 1;

  const spaceNumber = (levelTotal - pyramidTotal) / 2;
  const structureNumber = pyramidTotal;

  if (howManyCharactersAlready < spaceNumber) {
    level += " ";
  } else if (
    howManyCharactersAlready >= spaceNumber &&
    howManyCharactersAlready < structureNumber + spaceNumber
  ) {
    level += "#";
  } else {
    level += " ";
  }

  if (level.length === levelTotal) {
    console.log(level);
    return pyramid_ryan(n, row + 1, "");
  }

  return pyramid_ryan(n, row, level);
}

//Stephen's iterative solution
function pyramid__(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

//Stephen's recursive solution
function pyramid_recursive(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid_recursive(n, row + 1, "");
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  level += add;
  return pyramid_recursive(n, row, level);
}

module.exports = pyramid_recursive;
