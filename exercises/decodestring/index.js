const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    console.log("stack", stack);
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    console.log("cur", cur);
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    console.log("str", str);
    console.log("cur2", cur);
    console.log("stack", stack);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
};

// const decodeString = (s) => {
//   while (s.includes("[")) {
//     s = s.replace(/(\d+)\[(\w+)\]/g, (_, number, word) => word.repeat(number));
//   }
//   return s;
// };

module.exports = decodeString;
