const capitalize = require('./capitalize');

test('capitalize', () => {
  expect(capitalize("apple")).toBe("Apple");
})