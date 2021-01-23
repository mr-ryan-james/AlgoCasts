// [0,1,0,2,1,0,1,3,2,1,2,1]

var trap = function (height) {
  let totalWater = 0;

  for (let i = 0; i < height.length; i++) {
    const leftMax = height.slice(0, i + 1).reduce((a, i) => Math.max(a, i), -1);
    const rightMax = height.slice(i).reduce((a, i) => Math.max(a, i), -1);

    const waterAndBuilding = Math.min(leftMax, rightMax);
    const waterOnly = waterAndBuilding - height[i];
    totalWater += waterOnly;
  }

  return totalWater;
};

module.exports = trap;
