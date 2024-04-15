/**
 * i = 0, j = 0, res = []
 * 1 > 2, [1], i = 1, j = 0
 * 2 = 2 , [1, 2, 2], i = 2
 * 3 > 2, [1, 2, 3], i = 2, j = 1
 * 3 > 5, [1, 2, 3, 5], i = 2, j = 2
 * 3 > 6, [1, 2, 3, 5, 6], i = 2, j = 3 = end
 *
 *
 *
 */

const task = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p--;
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p--;
      p2--;
    }
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p--;
    p2--;
  }

  return nums1;
  // const result = [];
  // let i = 0;
  // let j = 0;
  //
  // while (i < m && j < n) {
  //   if (nums1[i] < nums2[j]) {
  //     result.push(nums1[i]);
  //     i++;
  //   } else {
  //     result.push(nums2[j]);
  //     j++;
  //   }
  // }
  //
  // while (i < m) {
  //   result.push(nums1[i]);
  //   i++;
  // }
  //
  // while (j < n) {
  //   result.push(nums2[j]);
  //   j++;
  // }
  //
  // return result;
};

console.log(task([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
// console.log(task([1], 1, [], 0)); // [1]
// console.log(task([], 0, [1], 1)); // [1]
// console.log(task([1], 0, [0], 1)); // ???

module.exports = task;
