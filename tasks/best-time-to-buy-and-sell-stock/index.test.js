const maxProfit = require('./index.js');

describe('maxProfit', () => {
  it('1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('21', () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  it('22', () => {
    expect(maxProfit([2, 4, 1, 2])).toBe(2);
  });

  it('23', () => {
    expect(maxProfit([2, 3, 1])).toBe(1);
  });

  it('24', () => {
    expect(maxProfit([2, 1, 2, 0, 1])).toBe(1);
  });

  it('25', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('26', () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
  });

  it('3', () => {
    expect(maxProfit([1, 1, 5, 3, 6, 8])).toBe(7);
  });

  it('4', () => {
    expect(maxProfit([1, 1, 1])).toBe(0);
  });

  it('5', () => {
    expect(maxProfit([1, 1, 2, 1])).toBe(1);
  });

  it('6', () => {
    expect(maxProfit([1, 5, 4, 3, 1])).toBe(4);
  });

  it('7', () => {
    expect(maxProfit([])).toBe(0);
  });
});
