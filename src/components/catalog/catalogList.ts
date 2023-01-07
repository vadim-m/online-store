import Component from '../component';
import ProductMain from '../products/productMain';
import { Product } from '../../types/interfaces';
import PRODUCTS from '../../data/products';
import { getParamsSecificValue } from '../../helpers/hash';
import { getOptions } from '../../helpers/utils';

class CatalogList extends Component {
  private error: Error | null = null;
  private products: Product[] = [];
  private productsComponents: ProductMain[] = [];

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.getProducts();
  }

  getProducts() {
    this.products = this.filterProducts();
    if (this.products.length === 0) {
      this.products = PRODUCTS;
    }
    //! Add sorting PRODUCTS array
    //! PUT sorted PODUCTS to LocStr for filters
    this.productsComponents = this.products.map((product) => new ProductMain(product));
  }

  filterProducts() {
    const brandValue = getParamsSecificValue('brand') ?? getOptions(PRODUCTS, 'brand');
    const categoryValue = getParamsSecificValue('category') ?? getOptions(PRODUCTS, 'category');
    const colorValue = getParamsSecificValue('color') ?? getOptions(PRODUCTS, 'color');

    const filteredProducts = PRODUCTS.filter((element) => {
      return (
        brandValue.includes(element.brand) &&
        categoryValue.includes(element.category) &&
        colorValue.includes(element.color)
      );
    });

    if (filteredProducts.length === 0) {
      return [
        {
          brand: 'fake',
          category: 'fake',
          color: 'fake',
          description: 'fake',
          id: 0,
          images: [],
          material: 'fake',
          price: 0,
          stock: 0,
          thumbnail:
            'https://www.electricbikesuperstore.com.au/wp-content/uploads/2020/12/dummy-image-white.jpg',
          title: 'Товаров не найдено',
          top: 'fake',
        },
      ];
    }

    return filteredProducts;
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

  addEvents() {
    this.productsComponents.forEach((item) => item.addEvents());
  }
}

export default CatalogList;
