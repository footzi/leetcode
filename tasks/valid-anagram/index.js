/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    const value = map.get(symbol);

    if (value) {
      map.set(symbol, value + 1);
    } else {
      map.set(symbol, 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    const symbol = t[j];

    const value = map.get(symbol);

    if (value) {
      const newValue = value - 1;
      map.set(symbol, newValue);

      if (newValue === 0) {
        map.delete(symbol);
      }
    } else {
      map.set(symbol, 1);
    }
  }

  return map.size === 0;
};

// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false

/// FAST
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const obj = {};

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    if (obj[symbol]) {
      obj[symbol] = obj[symbol] + 1;
    } else {
      obj[symbol] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    const symbol = t[j];

    if (!obj[symbol]) {
      return false;
    }

    obj[symbol] = obj[symbol] - 1;
  }

  return true;
};

console.log(isAnagram2('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
