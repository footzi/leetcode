const task = require('./index.js');

describe('sum', () => {
  it('1', () => {
    expect(task([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  it('2', () => {
    expect(task([1, 1, 1, 1])).toBe(6);
  });

  it('3', () => {
    expect(task([1, 2, 3])).toBe(0);
  });

  it('4', () => {
    expect(task([1, 1, 1])).toBe(3);
  });

  it('5', () => {
    expect(task([1, 1, 2, 1])).toBe(3);
  });

  it('6', () => {
    expect(task([1, 1])).toBe(1);
  });

  it('7', () => {
    expect(task([1, 2, 1])).toBe(1);
  });
});
