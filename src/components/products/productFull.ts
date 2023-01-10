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

    if (!item) {
      return `
        <h3>
          Товар с таким ID отсутствует!
        </h3>
        <hr>
        <p>
          <b>
            <a href="#store?" style="color: var(--red)">
              Вернуться на Главную
            </a>
          </b>
        <p>
      `;
    }

    return `
    <article class="product" id="${item.id}">
            <div class="product__photo">
              <div class="product__photo-main">
                <img src="${item.thumbnail}" alt="${item.title}"
                  class="product__img">
              </div>
              <ul class="product__thumbnails">
                <li class="product__thumbnail active">
                  <button class="product__thumbnail-pic" data-thums="0" style="background-image: url(${item.images[0]})">
                  </button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic" data-thums="1" style="background-image: url(${item.images[1]})"></button>
                </li>
                <li class="product__thumbnail">
                  <button class="product__thumbnail-pic" data-thums="2" style="background-image: url(${item.images[2]})"></button>
                </li>
              </ul>
            </div>
            <div class="product__content">
              <div class="product__info">
                <h3 class="product__name">${item.title}</h3>
                <div class="product__price">${item.price} ₽</div>
              </div>
              <div class="product__brand">Бренд:
                <span class="product__brand-value">${item.brand}</span>
              </div>
              <div class="product__full-info">
                <h4 class="product__description">Описание товара:</h4>
                <p class="product__text">${item.description}</p>
                <div class="product__category">Категория:
                  <span class="product__category-value">${item.category}</span>
                </div>
                <div class="product__color">Цвет:
                  <span class="product__color-value">${item.color}</span>
                </div>
                <div class="product__material">Материал:
                  <span class="product__material-value">${item.material}</span>
                </div>
                <div class="product__stock">В наличии:
                <span class="product__stock-value">${item.stock}</span>
              </div>  
              </div>
              <div class="product__buttons">
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

  changeProductImageSrc(item: HTMLImageElement, imageUrl: string) {
    item.setAttribute('style', 'opacity: 0');
    item.src = imageUrl;
    item.classList.add('product__img_replace');
    setTimeout(() => {
      item.classList.remove('product__img_replace');
      item.setAttribute('style', 'opacity: 1');
    }, 300);
  }

  changeThumbsActiveClass(thumbIndex: number, parent: HTMLUListElement) {
    parent.querySelectorAll('.product__thumbnail').forEach((item) => {
      item.classList.remove('active');
    });
    const activeThumb = parent.querySelectorAll('.product__thumbnail')[thumbIndex];
    activeThumb.classList.add('active');
  }

  eventListener() {
    const thumbnails = <HTMLUListElement>this.container.querySelector('.product__thumbnails');
    if (!thumbnails) {
      return;
    }

    thumbnails.addEventListener('click', (e) => {
      e.preventDefault();
      const target = <HTMLButtonElement>e.target;
      if (target.classList.contains('product__thumbnail-pic')) {
        const url = target.style.backgroundImage.slice(4, -1).replace(/"/g, '');
        const imageEl = <HTMLImageElement>this.container.querySelector('.product__img');
        this.changeProductImageSrc(imageEl, url);

        const thumbIndex = target.dataset.thums;
        if (!thumbIndex) {
          return;
        }
        this.changeThumbsActiveClass(+thumbIndex, thumbnails);
      }
    });
  }

  render() {
    this.container.innerHTML = this.renderProduct();
    this.eventListener();
    return this.container;
  }
}

export default ProductFull;
