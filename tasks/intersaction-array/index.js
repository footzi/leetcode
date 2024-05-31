const task = (array1, array2) => {
  const map = new Map();
  const result = [];

  array1.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  array2.forEach((num) => {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, 0);
    }
  });

  console.log(result);
  return result;
};

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];

const arr3 = [4, 9, 5];
const arr4 = [9, 4, 9, 8, 4];

task(arr1, arr2); // [2, 2]
task(arr3, arr4); // [9, 4]

module.exports = task;
