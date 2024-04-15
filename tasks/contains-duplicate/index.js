const task = (array) => {
  const values = {};

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (values[el] && values[el] + 1 > 1) {
      return true;
    }

    values[el] = values[el] ? values[el] + 1 : 1;
  }

  return false;
};

console.log(task([1, 2, 3, 4]), 'false');
console.log(task([2, 5, 10, 11, 10, 10]), 'true');
console.log(task([1]), 'false');
module.exports = task;
