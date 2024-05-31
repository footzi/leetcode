const task = (nums) => {
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) {
  //     nums.splice(nums[i], 1);
  //     i--;
  //   }
  // }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

// const n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const n = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
// const n = [0, 1, 1, 4];
// const n = [0, 1, 2];
// const n = [0];
// const n = [1, 1, 1];
console.log(task(n)); /// 0,1,2,3,4
console.log(JSON.stringify(n));

// console.log(task([1, 1, 2, 3, 5, 6]), [1, 2, 3, 5, 6, '_'], 3); /// 3
// console.log(task([0, 1, 1, 4]), [0, 1, 4, '_'], 3); /// 3
// console.log(task([0, 1, 2]), [0, 1, 2], 0); /// 3
// console.log(task([]), [], 0); /// 3
// console.log(task([1, 1, 1]), [1, '_', '_'], 0); /// 3

module.exports = task;
