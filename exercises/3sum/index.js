var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const target = 0;
  const matches = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let start = i + 1;
    let end = nums.length - 1;

    console.log("i", i);

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      console.log("sum", sum);
      if (sum === target) {
        matches.push([nums[i], nums[start], nums[end]]);

        while (nums[start] === nums[start + 1]) {
          start++;
        }

        while (nums[end] === nums[end - 1]) {
          end--;
        }

        start++;
        end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  return matches;
};
threeSum([-1, 0, 1, 2, -1, -4]);

module.exports = threeSum;
