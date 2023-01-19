import Component from '../component';
import ProductMain from '../products/productMain';
import { IProduct } from '../../types/interfaces';
import PRODUCTS from '../../data/products';
import { getParamsSpecificValue } from '../../helpers/hash';
import { getFilteredProducts, getSortedProducts } from '../../helpers/filters';

class CatalogList extends Component {
  private allProducts: IProduct[] = [...PRODUCTS];
  private filteredProducts: IProduct[];
  private sortedAndFilteredProducts: IProduct[];
  private productsComponents: ProductMain[] = [];
  private listViewStyle: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.filteredProducts = this.getFilteredProducts(this.allProducts);
    this.sortedAndFilteredProducts = this.getSortedProducts(this.filteredProducts);
    this.productsComponents = this.fillProductsComponents(this.sortedAndFilteredProducts);
    this.listViewStyle = this.checkViewParam();
  }

  checkViewParam() {
    const viewValue = getParamsSpecificValue('view') ?? 'column';
    return `catalog__list_${viewValue}`;
  }

  getFilteredProducts(products: IProduct[]) {
    const resultArr = getFilteredProducts(products);
    if (resultArr.length === 0) {
      return products;
    } else {
      return resultArr;
    }
  }

  getSortedProducts(products: IProduct[]) {
    const sortValue = getParamsSpecificValue('sort') ?? 'default';
    const resultArr = getSortedProducts(products, sortValue);

    return resultArr;
  }

  fillProductsComponents(products: IProduct[]) {
    return products.map((product) => new ProductMain(product));
  }

  getContentNode() {
    const container = document.createElement('ul');
    container.className = `catalog__list ${this.listViewStyle}`;

    const htmlTemplate = `${this.productsComponents.map((product) => product.render()).join('')}`;
    container.innerHTML = htmlTemplate;

    return container;
  }

  render() {
    this.container.append(this.getContentNode());

    return this.container;
  }

  //! Варя делала, не знаю что это.
  addEvents() {
    this.productsComponents.forEach((item) => item.addEvents());
  }
}

export default CatalogList;
