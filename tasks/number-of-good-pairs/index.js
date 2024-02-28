const task = (array) => {
  const temp = {};

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (typeof temp[el] === 'undefined') {
      temp[el] = 0;
    }

    for (let j = i + 1; j < array.length; j++) {
      const elSecond = array[j];

      if (elSecond === el) {
        temp[el] = temp[el] + 1;
      }
    }
  }

  return Object.values(temp).reduce((acc, value) => acc + value, 0);
};

const arr = [1, 2, 3, 1, 1, 3]; // 4
// const arr = [1, 2, 3]; // 0
// const arr = [1, 2, 1]; // 3
task(arr); //4

module.exports = task;
