import PRODUCTS from '../../data/products';
import Component from '../component';

class ProductBreadcrumbs extends Component {
  private id: number;

  constructor(tagName: string, className: string, id: number) {
    super(tagName, className);
    this.id = id;
  }

  renderBreadcrumbs() {
    const id = this.id;
    const item = PRODUCTS.filter((item) => {
      return item.id === id;
    })[0];
    console.log(item);

    if (!item) {
      return `
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#store?">На главную</a>
        </li>
      </ul>
      `;
    }

    return `
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#store?">Каталог</a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#store?brand=${item.brand}">${item.brand}</a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#store?category=${item.category}">${item.category}</a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">${item.title}</a>
        </li>
      </ul>
    `;
  }

  render() {
    this.container.innerHTML = this.renderBreadcrumbs();

    return this.container;
  }
}

export default ProductBreadcrumbs;
