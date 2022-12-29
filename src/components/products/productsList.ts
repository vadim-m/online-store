import Component from '../component';
import ProductItem from './productItem';

class ProductsList extends Component {
  private productsComponents: ProductItem[] = [new ProductItem()];

  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderItems() {
    const container = document.createElement('section');
    container.className = 'catalog__list-wrap';

    const html = `
      <ul class="catalog__list">
        ${this.productsComponents.map((product) => product.render()).join('')}
      </ul>
      `;

    container.innerHTML = html;
    return container;
  }
}

export default ProductsList;
