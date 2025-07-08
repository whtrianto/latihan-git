const sum = require('./sum');

test('menjumlahkan 1 + 2 harus menghasilkan 3', () => {
  expect(sum(1, 2)).toBe(3);
});
