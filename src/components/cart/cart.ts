import Component from '../component';
import Modal from '../../components/modal-form/modal-form';
import LocalStorage from '../../data/localStorage';
import PRODUCTS from '../../data/products';
import CartItem from './cartItem';
import SuccessPurchase from '../modal-form/successPurchase';
import { Product, IProductInStorage } from '../../types/interfaces';
import Header from '../header/header';
import { addParams } from '../../helpers/hash';

class Cart extends Component {
  private modal: Modal;
  private sucessPurchase: SuccessPurchase;
  private localStorage: LocalStorage;
  private products: Product[] = [];
  private productsComponents: CartItem[] = [];
  private productsInStore;
  private header: Header;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.modal = new Modal('div', 'container');
    this.sucessPurchase = new SuccessPurchase('div', 'container');
    this.localStorage = new LocalStorage();
    this.getProducts();
    this.productsInStore = this.localStorage.getProducts();
    this.header = new Header();
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
    return totalAmount.length > 0 ? totalAmount.reduce((a, b) => a + b) : 0;
  }

  getTotalCost() {
    const productsPrices: number[] = [];
    this.productsInStore.forEach((product: Product) => {
      productsPrices.push(product.price);
    });
    return productsPrices.length > 0 ? productsPrices.reduce((a, b) => a + b) : 0;
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

    const emptyHtml = `
      <div class="cart__empty">КОРЗИНА ПУСТА</div>
    `;

    const html = `
      <ul class="catalog__list">
        ${filteredItems.map((product) => product.render()).join(' ')}
      </ul>
      <div class="cart__summary">
        <h3 class="cart__title">ИТОГО</h3>
        <div class="cart__amount"><span>Количество товаров:</span>
          <div class="product__price">${this.getTotalAmount()}</div>
        </div>
        <div class="cart__price"><span>Стоимость товаров:</span>
          <div class="product__price">${this.getTotalCost()}₽
            <span class="product__discount-price">50 ₽ promo (JS)</span>
        </div>
        </div>
        <div class="cart__promocode">
            <input class="cart__input" placeholder="Введите промокод" type="text">
            <div class="cart__promocode-example">Например, "Лебединое озеро" </div>
        </div>
        <button class="product__button product__button_cart cart__button" id="buy">
          Купить
        </button>
      </div>
      `;

    if (filteredItems.length === 0) {
      container.innerHTML = emptyHtml;
    } else {
      container.innerHTML = html;
    }

    this.container.append(container);
    this.container.append(this.modal.render());
    this.container.append(this.sucessPurchase.render());
  }

  render() {
    this.renderCart();
    this.eventListener();
    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('button').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = <HTMLButtonElement>e.target;
        if (target.innerText === '-' || target.innerText === '+') {
          const paramName = target.name;
          const paramValue = target.value;
          addParams(paramName, paramValue);
          this.changePlusMinus(target);
        }
      });
    });
    const inputPromo = this.container.querySelector('input');
    inputPromo?.addEventListener('keyup', (e) => {
      const target = <HTMLInputElement>e.target;
      const coupon10 = 'Лебединое озеро';
      if (target.value === coupon10) console.log('Купон принят');
    });
  }

  changePlusMinus(button: HTMLElement) {
    const counterWrapper = button.closest('.product__count');
    const counter = counterWrapper?.querySelector('.product__count_amount') as HTMLElement;
    const product = button.closest('.cart__row') as HTMLElement;
    const stock = product.querySelector('.product__stock-value') as HTMLButtonElement;

    if (button.classList.value === 'product__count_plus') {
      if (counter && parseInt(counter.innerText) < parseInt(stock.innerText)) {
        counter.innerText = String(this.localStorage.getOneTypeProductsAmount(product.id) + 1);
        this.localStorage.putOneTypeProducts(product.id, true);
        this.header.render();
      }
    }

    if (button.classList.value === 'product__count_minus') {
      if (parseInt(counter.innerText) >= 1) {
        counter.innerText = String(this.localStorage.getOneTypeProductsAmount(product.id) - 1);
        this.localStorage.putOneTypeProducts(product.id, false);
        this.header.render();
      }
      if (parseInt(counter.innerText) < 1) {
        this.localStorage.putProducts(parseInt(product.id), 0);
        this.header.render();
      }
    }
  }
}

export default Cart;
