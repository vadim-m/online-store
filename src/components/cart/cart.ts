import Component from '../component';
import Modal from '../../components/modal-form/modal-form';
import LocalStorage from '../../data/localStorage';
import PRODUCTS from '../../data/products';

class Cart extends Component {
  private modal: Modal;
  private localStorage: LocalStorage;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.modal = new Modal('div', 'container');
    this.localStorage = new LocalStorage();
  }

  renderCart() {
    const productsStore = this.localStorage.getProducts();
    let htmlCatalog = '';
    let sumCatalog = 0;
    let amountCatalog = 0;

    const container = document.createElement('div');
    container.className = 'cart';

    PRODUCTS.forEach(({ id, title, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
              <div class="product__content">
                <div class="product__info">
                  <h3 class="product__name">${title}</h3>
                <div class="product__price">${price} ₽</div>
                </div>
              </div>
          `;
        sumCatalog += price;
        amountCatalog += 1;
      }
    });

    const htmlTemplate = `
      <div class="cart__items">
        ${htmlCatalog}
      </div>
      <div class="cart__summary">
        <div class="cart__amount">
          <span>Количество: </span>
          ${amountCatalog} ₽
        </div>
        <div class="cart__sum">
          <span>Сумма:</span>
          ${sumCatalog} ₽
        </div>

        <button class="cart__button product__button product__button_cart" id="buy">КУПИТЬ</button>
      </div>        
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
