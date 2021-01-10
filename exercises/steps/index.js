// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//start Ryan recursive
function step_recursion(now, goal) {
  if (now > goal) {
    return;
  }

  const pound = Array(now).fill("#");
  const space = Array(goal - now).fill(" ");
  console.log(pound.join("") + space.join(""));
  return step_recursion(now + 1, goal);
}

function steps_ryan(n) {
  step_recursion(1, n);
}
//end Ryan recursive

// Stephen iterative solution
function steps_stephen_iterative(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

//ryans iterative solution (with help)
function steps_ryan_iterative(n) {
  for (let row = 0; row < n; row++) {
    const stair = Array(n);
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair.push("#");
      } else {
        stair.push(" ");
      }
    }
    console.log(stair.join(""));
  }
}

//stephens recursive solution
// row = how many of these have we printed
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  //have we built out the string to the correct size?
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //do we add on a pound or a space?
  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}

module.exports = steps;
