import PRODUCTS from '../../data/products';
import Component from '../component';

class ProductBreadcrumbs extends Component {
  private id: number;

  constructor(tagName: string, className: string, id: number) {
    super(tagName, className);
    this.id = id;
  }

  getElementTemplate() {
    const currentProduct = PRODUCTS.filter((item) => {
      return item.id === this.id;
    })[0];

    if (!currentProduct) {
      return `
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#store?">На главную</a>
          </li>
        </ul>
      `;
    } else {
      return `
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#store?">Каталог</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#store?brand=${currentProduct.brand}">${currentProduct.brand}</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#store?category=${currentProduct.category}">${currentProduct.category}</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link">${currentProduct.title}</a>
          </li>
        </ul>
      `;
    }
  }

  render() {
    this.container.innerHTML = this.getElementTemplate();

    return this.container;
  }
}

export default ProductBreadcrumbs;
