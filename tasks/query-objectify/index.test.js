const task = require('./index.js');

describe('sum', () => {
  it('1', () => {
    expect(task([1, 2, 3, 1, 1, 3])).toBe(4);
  });
});
