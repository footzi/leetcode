// Найти счастливое число из другого числа
// Счастливое число, это число если оно встречается такое же кол-во раз
// Если числа нет вернуть 0
// Если чисел два, то вернуть максимальное

const task = (num) => {
  const string = String(num);
  const hash = {};
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    const el = string[i];

    if (hash[el]) {
      hash[el] = hash[el] + 1;
    } else {
      hash[el] = 1;
    }
  }

  for (let key in hash) {
    if (Number(key) === hash[key]) {
      result = Math.max(result, hash[key]);
    }
  }
  return result;
};

console.log(task(1223), '2');
console.log(task(1321393), '3');
console.log(task(12345), '0');
console.log(task(123297537839), '3');
console.log(task(12), '0');

module.exports = task;
