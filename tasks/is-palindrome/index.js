const task = (string) => {
  const s = string.toLowerCase().replace(/[\W_]+/g, '');
  const reversed = s.split('').reverse().join('');

  return s === reversed;
};

module.exports = task;
//
// console.log(task('A man, a plan, a canal: Panama')); // true
// console.log(task('race a car'));

// // not my good soultion
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car'));
