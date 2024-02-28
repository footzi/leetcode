// const task = (s, t) => {
//   let result = true;
//
//   for (let i = 0; i < s.length; i++) {
//     const symbol = s[i];
//     let r = false;
//
//     for (let j = i; j < t.length; j++) {
//       const nextSymbol = t[j];
//
//       if (symbol === nextSymbol) {
//         r = true;
//         break;
//       }
//     }
//
//     if (!r) {
//       result = false;
//     }
//   }
//
//   return result;
// };

const task = (s, t) => {
  let pointer = 0;

  for (let i = 0; i < t.length; i++) {
    const symbol = t[i];

    if (symbol === s[pointer]) {
      pointer++;
    }
  }

  return pointer === s.length;
};

// console.log(task('abc', 'ahbgdc')); // true
// console.log(task('axc', 'ahbgdc'), 'result'); // false
console.log(task('wacf', 'wacrteer')); // true
module.exports = task;
