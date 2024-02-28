const task = (s) => {
  const array = s.trim().split(' ');

  return array[array.length - 1].length;
};

console.log(task('Hello World')); // 5
// console.log(task('  fly me   to   the moon  ')); // 4
module.exports = task;
