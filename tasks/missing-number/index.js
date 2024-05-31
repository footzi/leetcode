const task = (nums) => {
  const sorted = nums.sort((a, b) => a - b);

  console.log(sorted);

  if (sorted[nums.length - 1] < nums.length) {
    return nums.length;
  }

  for (let i = 0; i < sorted.length; i++) {
    const num = sorted[i];
    const next = sorted[i + 1];

    if (num + 1 < next) {
      return num + 1;
    }
  }
};

// console.log(task([0, 1, 2, 4]), '3'); /// 3
// console.log(task([3, 1, 0]), '2'); /// 2
// console.log(task([0, 1]), '2'); /// 2
// console.log(task([0]), '0'); /// 1 ?
// console.log(task([1])); /// 1 ?

console.log(
  task([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39,
    46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
  // 49
);

module.exports = task;
