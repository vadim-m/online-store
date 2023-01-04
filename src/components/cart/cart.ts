import Component from '../component';
import Modal from '../../components/modal-form/modal-form';

class Cart extends Component {
  private modal: Modal;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.modal = new Modal('div', 'container');
  }

  renderCart() {
    const container = document.createElement('div');
    container.className = 'cart';

    const htmlTemplate = `
      <button class="cart__button product__button product__button_cart" id="buy">КУПИТЬ</button>
    `;

    container.innerHTML = htmlTemplate;

    this.container.append(container);
    this.container.append(this.modal.render());
  }

  render() {
    this.renderCart();
    return this.container;
  }
}

export default Cart;
