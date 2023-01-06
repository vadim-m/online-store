import Component from '../component';
import Modal from '../../components/modal-form/modal-form';
import LocalStorage from '../../data/localStorage';
import PRODUCTS from '../../data/products';
import CartItem from './cartItem';
import { Product } from '../../types/interfaces';

class Cart extends Component {
  private modal: Modal;
  private localStorage: LocalStorage;
  private products: Product[] = [];
  private productsComponents: CartItem[] = [];

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.modal = new Modal('div', 'container');
    this.localStorage = new LocalStorage();
    this.getProducts();
  }

  getProducts() {
    this.products = PRODUCTS;
    this.productsComponents = this.products.map((product) => new CartItem(product));
  }

  renderCart() {
    const productsStore = this.localStorage.getProducts();

    const container = document.createElement('div');
    container.className = 'cart';

    const filteredItems = [];
    this.productsComponents.forEach((product) => {
      if (productsStore.indexOf(product.getId()) !== -1) {
        filteredItems.push(product);
      }
    });

    // const a = [];
    // filteredItems.forEach((el) => a.push(el.product.price));

    // const price = a.reduce((a, b) => a + b);

    const html = `
      <ul class="catalog__list">
        ${filteredItems.map((product) => product.render()).join(' ')}
      </ul>
      <div>
        <div><span>Количество:</span></div>
        <div><span>Сумма:</span></div>
      </div>
      `;

    container.innerHTML = html;

    this.container.append(container);
    this.container.append(this.modal.render());
  }

  render() {
    this.renderCart();
    return this.container;
  }
}

export default Cart;
