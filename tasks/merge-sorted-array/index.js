/**
 * Начинаем проход с конца двух массивов и заводим 3 указатель куда складываем максимальное число на итерации
 * Идем пока хотя бы один массив не закончится
 * Когда закончится добавляем остатки из второго массива
 */

const task = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1; // собираем новый массив

  while (p1 >= 0 && p2 >= 0) {
    // идем с конца массива
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
};

console.log(task([1, 2, 3], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
// console.log(task([1], 1, [], 0)); // [1]
// console.log(task([], 0, [1], 1)); // [1]
// console.log(task([1], 0, [0], 1)); // ???

module.exports = task;

const task2 = (nums1, m, nums2, n) => {};

console.log(task2([1, 2, 3], 3, [2, 5, 6], 3));
// const arr2 = []
