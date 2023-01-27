import Cart from '../src/components/cart/cart';

test('Method eventListener should be defined', () => {
  const cart = new Cart('div', 'cart');
  expect(cart.eventListener()).not.toBeDefined();
});
