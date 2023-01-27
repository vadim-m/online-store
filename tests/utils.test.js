const countDiscountPrice = require('../src/helpers/utils');

test('CountDiscountPrice should return correct discount amount', () => {
  expect(countDiscountPrice(1800, [10, 1])).toBe(1602);
});
