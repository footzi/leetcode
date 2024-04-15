const task = (haystack, needle) => {
  const needleLength = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    let needleIndex = 0;
    let haystackIndex = i;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[haystackIndex] !== needle[j]) {
        break;
      } else {
        needleIndex++;
        haystackIndex++;
      }
    }

    if (needleIndex === needleLength) {
      return i;
    }
  }

  return -1;
};

module.exports = task;

console.log(task('dogcatdogcat', 'cat'), 3);
console.log(task('leetcode', 'leeto'), -1);
console.log(task('leetcode', 'led'), -1);
console.log(task('sadbutsad', 'sad'), 0);
console.log(task('butsad', 'sad'), 4);
console.log(task('butbut', 'sad'), -1);
console.log(task('sabut', 'sad'), -1);
console.log(task('leetcode', 'leeto'), -1);
