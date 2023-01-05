import { Product } from '../../types/interfaces';
import { PageIds } from '../../types/types';
import LocalStorage from '../../data/localStorage';

class ProductMain {
  private localStorage: LocalStorage;

  constructor(private product: Product) {
    this.localStorage = new LocalStorage();
  }

  private getHtmlID = () => `button__${this.product.id}`;

  render() {
    return `
       <li class="catalog__item">
       
        <article class="product product_row" id="${this.product.id}">
          <div class="product__photo">
            <div class="product__photo-main">
              <a class="product__href" href="#${PageIds.ProductPage}?id=${this.product.id}">
                <img src="${this.product.thumbnail}" alt="Product image"
                class="product__img">
              </a>
            </div>
          </div>
          <div class="product__content">
            <div class="product__info">
              <a class="product__href" href="#${PageIds.ProductPage}?id=${this.product.id}">
                <h3 class="product__name">${this.product.title}</h3>
              </a>
              <div class="product__price">${this.product.price} ₽
              </div>
            </div>
            <div class="product__stock">В наличии:
                <span class="product__stock-value">${this.product.stock}</span>
            </div>
            <div class="product__buttons">
              <div class="product__count">
                <button class="product__count_minus">-</button>
                <span class="product__count_amount">1</span>
                <button class="product__count_plus">+</button>
              </div>
              <button class="product__button product__button_cart" id="button__${this.product.id}">
                Добавить в корзину
              </button>
              <button class="product__button product__button_click">
                Купить в один клик
              </button>
            </div>
          </div> 
        </div>
       </article>
     </li>
    `;
  }

  addEvents() {
    const button = document.getElementById(this.getHtmlID());

    if (!button) {
      throw new Error('Button is undefined');
    }
    button.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      console.log('click', this.product);
      this.localStorage.putProducts(this.product.id);
    });
  }
}

export default ProductMain;
