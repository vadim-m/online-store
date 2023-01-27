import LocalStorage from '../src/data/localStorage';

describe('putOneProductQuick should return correct', () => {
  test('object', () => {
    const localStorage = new LocalStorage();
    const output = { product: 1 };

    expect(localStorage.putOneProductQuick(1)).toEqual(output);
  });
});
