/**
 * Заводим три указателя старт конец и середина и перемещаем их взависимсоти от больший или меньший это интервал
 */

const binarySearch = (arr, x) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2); // тут надо сложить
    const num = arr[mid];

    if (num === x) {
      return num;
    }

    if (num < x) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 8, 10, 31, 234]; /// 3 / 5 = 4 ->
// min = 0, max = 5, mid = 2 (8)

console.log(binarySearch(arr, 234));
