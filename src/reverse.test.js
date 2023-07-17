const reverseString = require('./reverse.js');

test('reverse string', () => {
  expect(reverseString("light")).toBe("thgil");
});

test('reverse string toMatch', () => {
  expect(reverseString('tomato')).toMatch(/otamot/);
});