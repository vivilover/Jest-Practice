const caesarCipher = require('./caesarCipher.js');

test('Caesar Cipher Basics', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
});

test('Caesar Cipher Wraparound', () => {
  expect(caesarCipher('aczZ', 2)).toBe('cebB');
})