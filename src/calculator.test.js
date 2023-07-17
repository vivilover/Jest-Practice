const calculator = require('./calculator.js');

test('calculator add', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(2, 3)).toEqual(5);
  expect(calculator.add(2, 3)).toBeGreaterThan(4);
  expect(calculator.add(2, 3)).toBeGreaterThanOrEqual(5);
  expect(calculator.add(2, 3)).toBeLessThan(6);
  expect(calculator.add(2, 3)).toBeLessThanOrEqual(6);
})

// test('calculator add floats', () => {
//   // expect(calcualtor.add(0.1, 0.2)).toBe(0.3);
//   expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
// })

// test('calculator subtract', () => {
//   expect(calculator.subtract(10, 5)).toBe(5);
//   expect(calculator.subtract(10, 5)).toEqual(5);
//   expect(calculator.subtract(10, 5)).toBeGreaterThan(4);
//   expect(calculator.subtract(10, 5)).toBeGreaterThanOrEqual(5);
//   expect(calculator.subtract(10, 5)).toBeLessThan(6);
//   expect(calculator.subtract(10, 5)).toBeLessThanOrEqual(5);
// });

// test('calculator multiply', () => {
//   expect(calculator.multiply(7, 2)).toBe(14);
//   expect(calculator.multiply(7, 2)).toEqual(14);
//   expect(calculator.multiply(7, 2)).toBeGreaterThan(10);
//   expect(calculator.multiply(7, 2)).toBeGreaterThanOrEqual(14);
//   expect(calculator.multiply(7, 2)).toBeLessThan(15);
//   expect(calculator.multiply(7, 2)).toBeLessThanOrEqual(14);
// });

// test('calculator divide', () => {
//   expect(calculator.divide(28, 7)).toBe(4);
//   expect(calculator.divide(28, 7)).toEqual(4);
//   expect(calculator.divide(28, 7)).toBeGreaterThan(3);
//   expect(calculator.divide(28, 7)).toBeGreaterThanOrEqual(4);
//   expect(calculator.divide(28, 7)).toBeLessThan(5);
//   expect(calculator.divide(28, 7)).toBeLessThanOrEqual(10);
// });