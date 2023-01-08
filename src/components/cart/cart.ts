import Component from '../component';
import Modal from '../../components/modal-form/modal-form';
import LocalStorage from '../../data/localStorage';
import PRODUCTS from '../../data/products';
import CartItem from './cartItem';
import { Product, IProductInStorage } from '../../types/interfaces';

class Cart extends Component {
  private modal: Modal;
  private localStorage: LocalStorage;
  private products: Product[] = [];
  private productsComponents: CartItem[] = [];
  private productsInStore;
  private productsInStorage: IProductInStorage[] = [];

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.modal = new Modal('div', 'container');
    this.localStorage = new LocalStorage();
    this.getProducts();
    this.productsInStore = this.localStorage.getProducts();
  }

  getProducts() {
    this.products = PRODUCTS;
    this.productsComponents = this.products.map((product) => new CartItem(product));
  }

  getTotalAmount() {
    const totalAmount: number[] = [];
    this.productsInStore.forEach((product: IProductInStorage) => {
      totalAmount.push(product.count);
    });
    return totalAmount.reduce((a, b) => a + b);
  }

  getTotalCost() {
    const productsPrices: number[] = [];
    this.productsInStore.forEach((product: Product) => {
      productsPrices.push(product.price);
    });
    return productsPrices.reduce((a, b) => a + b);
  }

  getOneTypeProductPrice(id: string) {
    const products = this.localStorage.getProducts();
    let oneProductPrice: number | null = null;
    products.forEach((product: Product) => {
      if (product.id === +id) oneProductPrice = product.price;
    });
    return String(oneProductPrice);
  }

  renderCart() {
    const container = document.createElement('div');
    container.className = 'cart';
    const productsInCart: number[] = [];
    const filteredItems: CartItem[] = [];

    this.productsInStore.forEach((product: Product) => {
      productsInCart.push(product.id);
    });

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
        <h3 class="cart__title">ИТОГО</h3>
        <div><span>Количество товаров:</span>
          <h3>${this.getTotalAmount()}</h3>
        </div>
        <div><span>Стоимость товаров:</span>
          <div class="product__price">${this.getTotalCost()}₽
            <span class="product__discount-price">50 ₽ promo (JS)</span>
        </div>
        </div>
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
    this.eventListener();
    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('button').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = <HTMLInputElement>e.target;
        this.changePlusMinus(target);
      });
    });
  }

  changePlusMinus(button: HTMLElement) {
    const counterWrapper = button.closest('.product__count');
    const counter = counterWrapper?.querySelector('.product__count_amount') as HTMLElement;
    const product = button.closest('.cart__row') as HTMLElement;
    const priceWrapper = button.closest('.cart__item-price');
    const price = priceWrapper?.querySelector('.product__price') as HTMLElement;

    if (button.classList.value === 'product__count_plus') {
      if (counter) {
        counter.innerText = String(+counter.innerText + 1);
        this.localStorage.putOneTypeProducts(product.id);
        price.innerText = this.getOneTypeProductPrice(product.id);
      }
    }

    if (button.classList.value === 'product__count_minus') {
      if (parseInt(counter.innerText) > 1) counter.innerText = String(+counter.innerText - 1);
    }
  }
}

export default Cart;
