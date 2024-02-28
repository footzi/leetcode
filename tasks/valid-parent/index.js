/*
 * {}, [], ()
 *
 * {
 *   "{": 0
 *   "[": 0
 *   "(": 0
 * }
 * {{ = 2, } = 1
 *
 * */

const task1 = (string) => {
  const map = { '}': '{', ']': '[', ')': '(' };
  const hash = { '{': 0, '[': 0, '(': 0 };

  for (let i = 0; i < string.length; i++) {
    const el = string[i];

    if (el === '{' || el === '[' || el === '(') {
      hash[el] = hash[el] + 1;
    }

    if (el === '}' || el === ']' || el === ')') {
      const item = map[el];
      hash[item] = hash[item] - 1;
    }
  }

  return hash['{'] === 0 && hash['['] === 0 && hash['('] === 0;
};

const task = (string) => {
  const arr = [];
  const map = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < string.length; i++) {
    const el = string[i];

    if (el === '{' || el === '[' || el === '(') {
      arr.push(el);
    }

    if (el === '}' || el === ']' || el === ')') {
      const currentEl = arr[arr.length - 1];

      if (map[el] === currentEl) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};

module.exports = task;

console.log(task('{}'), ', expected = true');
console.log(task('{{}'), ', expected = false');
console.log(task('{{[[]]}}'), ', expected = true');
console.log(task('()[]{}'), 'expected = true');
console.log(task('{([])}'), 'expected = true');
console.log(task('{]'), 'expected = false');
console.log(task('[}'), 'expected = false');
console.log(task('}{'), 'expected = false');

// console.log(task('([)]'));
