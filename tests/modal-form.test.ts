import Modal from '../src/components/modal-form/modal-form';
import { expect } from 'chai';

describe('Method renderCart should return', () => {
  it('HTMLElement', () => {
    const modal = new Modal('div', 'modal');
    expect(modal.renderCart()).contain(HTMLElement);
  });
});
