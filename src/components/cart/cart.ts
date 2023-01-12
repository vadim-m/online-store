import Component from '../component';
import Modal from '../../components/modal-form/modal-form';
import LocalStorage from '../../data/localStorage';
import PRODUCTS from '../../data/products';
import CartItem from './cartItem';
import { IProduct } from '../../types/interfaces';

class Cart extends Component {
  private modal: Modal;
  private localStorage: LocalStorage;
  private products: IProduct[] = [];
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
    const productsInCart: number[] = [];
    productsStore.forEach((product: IProduct) => {
      productsInCart.push(product.id);
    });

    const container = document.createElement('div');
    container.className = 'cart';

    const filteredItems: CartItem[] = [];
    this.productsComponents.forEach((product) => {
      if (productsInCart.indexOf(product.getId()) !== -1) {
        filteredItems.push(product);
      }
    });

    const html = `
      <ul class="catalog__list">
        ${filteredItems.map((product) => product.render()).join(' ')}
      </ul>
      <div class="cart__summary">
        <h3>ИТОГО</h3>
        <div><span>Количество товаров:</span></div>
        <div><span>Стоимость товаров:</span></div>
        <div class="cart__promocode">
            <input class="cart__input" placeholder="Введите промокод" type="text">
          </div>
        <button class="product__button product__button_cart" id="buy">
          Купить
        </button>
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
