// todo Недоделал
// https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/

const task = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor(left + right / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    }

    if (nums[middle] > target) {
      right = middle - 1;
    }
  }

  return left;
};

module.exports = task;

console.log(task([1, 3, 5, 6, 7], 5), 2);
console.log(task([1, 2, 3, 4], 2), 1);
console.log(task([1, 3, 5, 6], 2), 1);
console.log(task([1, 3, 5, 6], 7), 4);
