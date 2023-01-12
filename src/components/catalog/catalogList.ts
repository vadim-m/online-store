import Component from '../component';
import ProductMain from '../products/productMain';
import { Product } from '../../types/interfaces';
import PRODUCTS from '../../data/products';
import { getParamsSpecificValue } from '../../helpers/hash';
import { getOptions } from '../../helpers/utils';

class CatalogList extends Component {
  private products: Product[] = [];
  private productsComponents: ProductMain[] = [];
  private listViewStyle: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.getProducts();
    this.listViewStyle = this.checkViewParam();
  }

  checkViewParam() {
    const viewValue = getParamsSpecificValue('view') ?? 'column';
    return `catalog__list_${viewValue}`;
  }

  getProducts() {
    this.products = this.filterProducts();
    if (this.products.length === 0) {
      this.products = PRODUCTS;
    }

    const sortValue = getParamsSpecificValue('sort') ?? 'default';
    this.sortProducts(sortValue);

    this.productsComponents = this.products.map((product) => new ProductMain(product));
  }

  filterProducts() {
    const brandValue = getParamsSpecificValue('brand') ?? getOptions(PRODUCTS, 'brand');
    const categoryValue = getParamsSpecificValue('category') ?? getOptions(PRODUCTS, 'category');
    const colorValue = getParamsSpecificValue('color') ?? getOptions(PRODUCTS, 'color');
    const minStockValue = getParamsSpecificValue('minStock') ?? '0';
    const maxStockValue = getParamsSpecificValue('maxPStock') ?? '100000';
    const minPriceValue = getParamsSpecificValue('minPrice') ?? '0';
    const maxPriceValue = getParamsSpecificValue('maxPrice') ?? '100000';

    let filteredProducts = PRODUCTS.filter((element) => {
      return (
        brandValue.includes(element.brand) &&
        categoryValue.includes(element.category) &&
        colorValue.includes(element.color) && 
        element.price >= +minPriceValue && 
        element.price <= +maxPriceValue &&
        element.stock >= +minStockValue && 
        element.stock <= +maxStockValue 
      );
    });

    const searchValue = getParamsSpecificValue('search') ?? null;
    if (searchValue) {
      filteredProducts = this.filterProductsBySearchValue(filteredProducts, searchValue);
    }

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
          thumbnail: 'https://basharathospital.clinta.biz/assets/under-construction.png',
          title: 'Товаров не найдено',
          top: 'fake',
        },
      ];
    }

    return filteredProducts;
  }

  filterProductsBySearchValue(products: Product[], value: string) {
    const searchValue = value.toLocaleLowerCase();
    const filteredProducts = products.filter((element) => {
      return (
        element.title.toLowerCase().includes(searchValue) ||
        element.brand.toLowerCase().includes(searchValue) ||
        element.color.toLowerCase().includes(searchValue) ||
        element.stock.toString().includes(searchValue) ||
        element.price.toString().includes(searchValue)
      );
    });

    return filteredProducts;
  }

  sortProducts(sortFilter: string) {
    switch (sortFilter) {
      case 'p-asc':
        this.products.sort((a: Product, b: Product) => a.price - b.price);
        break;

      case 'p-des':
        this.products.sort((a: Product, b: Product) => -a.price + b.price);
        break;

      case 'n-asc':
        this.products.sort((a: Product, b: Product) => {
          const firstTitle = a.title.toLocaleLowerCase();
          const secondTitle = b.title.toLocaleLowerCase();
          if (firstTitle > secondTitle) {
            return 1;
          }
          if (firstTitle < secondTitle) {
            return -1;
          }

          return 0;
        });
        break;

      case 'n-des':
        this.products.sort((a: Product, b: Product) => {
          const firstTitle = a.title[0];
          const secondTitle = b.title[0];
          if (firstTitle > secondTitle) {
            return -1;
          }
          if (firstTitle < secondTitle) {
            return 1;
          }

          return 0;
        });
        break;
    }
  }

  addItems() {
    const container = document.createElement('ul');
    container.className = `catalog__list ${this.listViewStyle}`;

    const htmlTemplate = `${this.productsComponents.map((product) => product.render()).join('')}`;
    container.innerHTML = htmlTemplate;

    return container;
  }

  render() {
    this.container.append(this.addItems());

    return this.container;
  }

  addEvents() {
    this.productsComponents.forEach((item) => item.addEvents());
  }
}

export default CatalogList;
