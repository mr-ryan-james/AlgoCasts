/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const target = 0;
  const results = [];
  nums.sort((a, b) => a - b); // O(n log(n))
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) {
      break;
    }

    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    const partialTarget = target - nums[i];
    let k = nums.length - 1;
    let j = i + 1;
    while (j < k) {
      const partialSum = nums[k] + nums[j];
      if (partialSum === partialTarget) {
        results.push([nums[i], nums[k], nums[j]]);
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }

        k--;
        j++;
      } else if (partialSum > partialTarget) {
        k--;
      } else {
        j++;
      }
    }
  }

  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);

module.exports = threeSum;
