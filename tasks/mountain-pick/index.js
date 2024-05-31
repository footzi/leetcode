const mountainPick = (arr) => {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let mid = Math.floor((max + min) / 2);
    const num = arr[mid];

    if (num > arr[mid + 1]) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
};

const arr1 = [1, 2, 3, 4, 3, 2, 1]; // 4

const arr2 = [11, 13, 14, 15, 6, 4, 2]; // 15
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // 9
const arr4 = [1, 2, 3, 4, 5, 6, 7]; // 7
const arr5 = [1, 5, 3, 2]; // 5
const arr6 = [1, 2, 3, 4, 5, 2]; // 5

// const arr = [0, 1, 2, 3, 4];
console.log(mountainPick(arr6));

const isPalin = (num) => {
  const str = String(num);
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

console.log(isPalin(12));
