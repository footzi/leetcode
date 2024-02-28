const task = (ransomNote, magazine) => {
  const map = {};
  let result = true;

  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];

    if (map[letter] && map[letter]) {
      map[letter] = map[letter] + 1;
    } else {
      map[letter] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];

    if (typeof map[letter] !== 'undefined') {
      const v = map[letter] - 1;
      map[letter] = v;

      if (v < 0) {
        result = false;
      }
    } else {
      map[letter] = 0;
      result = false;
    }
  }

  return result;
};

console.log(task('a', 'b')); // false
console.log(task('aa', 'ab')); // false
console.log(task('aa', 'aab')); // true
console.log(task('aab', 'baa')); // true
console.log(task('aba', 'aab')); // true

module.exports = task;
