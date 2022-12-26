import CATALOG from '../../constants/catalog';
import Component from '../component';

class StoreItems extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderItems() {
    const container = document.createElement('div');
    container.className = 'products__items';

    let htmlCatalog = '';

    CATALOG.forEach(({ name, price, img }) => {
      htmlCatalog += `
              <li class="item">
                  <img src="${img}" />
                  <span class="item__name">${name}</span>
                  <span class="item__price">${price}</span>
                  <button class="item__button">Добавить в корзину</button>
              </li>
          `;
    });

    const html = `
          <ul class="products__list">
              ${htmlCatalog}
          </ul>
      `;

    container.innerHTML = html;
    return container;
  }
}

export default StoreItems;
