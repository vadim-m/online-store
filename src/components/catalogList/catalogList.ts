import Component from '../component';
import ProductMain from '../products/productMain';

class ProductsList extends Component {
  private productsComponents: ProductMain[] = [new ProductMain()];

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
