import CATALOG from '../../constants/catalog';
import Component from '../component';

class CardsMain extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderItems() {
    const container = document.createElement('section');
    container.className = 'catalog__list-wrap';

    let htmlCatalog = '';

    CATALOG.forEach(({ id, thumbnail, title, price, stock }) => {
      htmlCatalog += `
      <li class="catalog__item">
      <article class="product product_row" id="${id}">
        <div class="product__photo">
          <div class="product__photo-main">
            <img src="${thumbnail}" alt="Product image"
              class="product__img">
          </div>
        </div>
        <div class="product__content">
          <div class="product__info">
            <h3 class="product__name">${title}</h3>
            <div class="product__price">${price} ₽
            </div>
          </div>
            <div class="product__stock">В наличии:
              <span class="product__stock-value">${stock}</span>
            </div>
        </div>
      </article>
    </li>
          `;
    });

    const html = `
          <ul class="catalog__list">
              ${htmlCatalog}
          </ul>
      `;

    container.innerHTML = html;
    return container;
  }
}

export default CardsMain;
