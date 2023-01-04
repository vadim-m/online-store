import PRODUCTS from '../../data/products';
import Component from '../component';

class ProductFull extends Component {
  private id: number;

  constructor(tagName: string, className: string, id: number) {
    super(tagName, className);
    this.id = id;
  }

  renderProduct() {
    const id = this.id;
    const item = PRODUCTS.filter((item) => {
      return item.id === id;
    })[0];

    return `
    <article class="product" id="${item.id}">
            <div class="product__photo">
              <div class="product__photo-main">
                <img src="${item.thumbnail}" alt="Product image"
                  class="product__img">
              </div>
              <ul class="product__thumbnails">
                <li class="product__thumbnail active">
                  <button class="product__thumbnail-pic"></button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic"></button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic"></button>
                </li>
              </ul>
            </div>
            <div class="product__content">
              <div class="product__info">
                <h3 class="product__name">${item.title}</h3>
                <div class="product__price active">${item.price} ₽
                  <span class="product__discount-price">50000 ₽</span>
                </div>
              </div>
              <div class="product__full-info">
                <h4 class="product__description">Описание товара:</h4>
                <p class="product__text">${item.description}
                </p>
                <div class="product__stock">В наличии:
                  <span class="product__stock-value">${item.stock}</span>
                </div>
                <div class="product__category">Категория:
                  <span class="product__category-value">${item.category}</span>
                </div>
                <div class="product__color">Цвет:
                  <span class="product__color-value">${item.color}</span>
                </div>
                <div class="product__material">Материал:
                  <span class="product__material-value">${item.material}</span>
                </div>
              </div>
              <div class="product__buttons">
                <div class="product__count">
                  <button class="product__count_minus">-</button>
                  <span class="product__count_amount">1</span>
                  <button class="product__count_plus">+</button>
                </div>
                <button class="product__button product__button_cart">
                  Добавить в корзину
                </button>
                <button class="product__button product__button_click">
                  Купить в один клик
                </button>
              </div>
            </div>
          </article>
    `;
  }

  render() {
    this.container.innerHTML = this.renderProduct();
    return this.container;
  }
}

export default ProductFull;
