const task = (strs) => {
  const firstWord = strs[0];
  let result = '';

  for (let i = 0; i < firstWord.length; i++) {
    const letter = firstWord[i];
    let r = letter;

    for (let j = 1; j < strs.length; j++) {
      const word = strs[j];

      if (letter !== word[i]) {
        r = '';
        break;
      }
    }

    if (r) {
      result = result + r;
    } else break;
  }

  return result;
};

console.log(task(['flower', 'flow', 'flight'])); // fl
console.log(task(['dog', 'racecar', 'car'])); // ""
console.log(task(['cat', 'corn', 'city'])); // "c"
console.log(task(['cir', 'car'])); // "c"
console.log(task(['a'])); // "a"

module.exports = task;
