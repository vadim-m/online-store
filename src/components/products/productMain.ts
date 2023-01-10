import { Product } from '../../types/interfaces';
import { PageIds } from '../../types/types';
import LocalStorage from '../../data/localStorage';
import Header from '../header/header';
import { getParamsSpecificValue } from '../../helpers/hash';
//import StorePage from '../../pages/store-page/store';

class ProductMain {
  private localStorage: LocalStorage;
  private header: Header;
  //private mainPage: StorePage;
  //private classNameActive: string;
  private labelAdd: string;
  private labelRemove: string;
  private button: HTMLElement | null;
  private productViewStyle: string;

  constructor(private product: Product) {
    this.localStorage = new LocalStorage();
    this.header = new Header();
    //this.mainPage = new StorePage('content');
    //this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
    this.button = document.querySelector('.product__button_cart');
    this.productViewStyle = this.checkViewParam();
  }

  private getHtmlID = () => `button__${this.product.id}`;

  handleSetLocationStorage(element: HTMLElement, id: number) {
    const pushProduct = this.localStorage.getButtonState(id);
    if (!pushProduct) {
      //element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      //element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
  }

  checkViewParam() {
    const viewValue = getParamsSpecificValue('view') ?? 'column';
    return `product_${viewValue}`;
  }

  changeButtonLabel() {
    const productsStore = this.localStorage.getProducts();
    let activeText = '';

    if (productsStore.indexOf(this.product.id) === -1) {
      activeText = this.labelAdd;
    } else {
      activeText = this.labelRemove;
    }
    return activeText;
  }

  render() {
    return `
      <li class="catalog__item">
        <article class="product ${this.productViewStyle}" id="${this.product.id}">
          <div class="product__photo">
            <div class="product__photo-main">
              <a class="product__href" href="#${PageIds.ProductPage}?id=${this.product.id}">
                <img src="${this.product.thumbnail}" alt="Product image"
                class="product__img">
              </a>
              <span class="product__top product__top_${this.product.top}">Top</span>
            </div>
          </div>
          <div class="product__content">
            <div class="product__info">
              <a class="product__href" href="#${PageIds.ProductPage}?id=${this.product.id}">
                <h3 class="product__name">${this.product.title}</h3>
              </a>
            </div>
            <div class="product__full-info">
            <div class="product__price">${this.product.price} ₽</div>
              <div class="product__brand">Бренд:
                <span class="product__brand-value">${this.product.brand}</span>
              </div>
              <div class="product__color">Цвет:
                <span class="product__color-value">${this.product.color}</span>
              </div>
              <div class="product__stock">В наличии:
                <span class="product__stock-value">${this.product.stock}</span>
              </div>
              <div class="product__buttons">  
                <button class="product__button product__button_cart" id="button__${
                  this.product.id
                }">
                  ${this.changeButtonLabel()}
                </button>
              </div>
            </div>
        </article>
      </li>
    `;
  }

  addEvents() {
    const button = document.getElementById(this.getHtmlID());

    if (button) {
      button.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        this.localStorage.putProducts(this.product.id, this.product.price);
        this.localStorage.putPrices(this.product.price);
        this.header.render();
        const button = event.target as HTMLElement;
        if (button) {
          this.handleSetLocationStorage(button, this.product.id);
        }
      });
    }
  }
}

export default ProductMain;
