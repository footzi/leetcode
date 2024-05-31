// https://www.youtube.com/watch?v=2Od3MV1-mpk&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&ab_channel=Front-endScience%D1%96%D0%B7%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D1%94%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%BC

const mergeInterval = (intervals) => {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const result = intervals[0];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const prev = result[result.length - 1];

    if (current[0] < prev[0]) {
      prev[1] = Math.max(current[1], prev[1]);
    } else {
      result.push(current);
    }
  }

  console.log(result);
  return result;
};

const i = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
];

mergeInterval(i);
