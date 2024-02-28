/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hash[num] !== undefined) {
      return [hash[num], i];
    }

    hash[target - num] = i;
  }

  return [];
};

// nums = [2,7,11,15], target = 9 // [0,1]

// nums = [3,2,4], target = 6 //[1,2]

console.log(twoSum([0, 5, 10, 6], 11), '[1,3]');

console.log(twoSum([2, 7, 11, 15], 9), '[0,1]');
console.log(twoSum([3, 2, 4], 6), '[1,2]');
console.log(twoSum([3, 2, 3], 6), '[0,2]');
console.log(twoSum([3, 2, 4], 100));
