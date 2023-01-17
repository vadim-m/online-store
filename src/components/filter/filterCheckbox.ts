import Component from '../component';
import PRODUCTS from '../../data/products';
import { IProduct } from '../../types/interfaces';
import { getParamsSpecificValue, getParamsValues } from '../../helpers/hash';
import { getOptions } from '../../helpers/utils';

class FilterCheckbox extends Component {
  private products: IProduct[] = [...PRODUCTS];
  private title = '';
  private category = '';
  private checkedAttr = '';

  constructor(tagName: string, className: string, title: string, category: string) {
    super(tagName, className);
    this.title = title;
    this.category = category;
  }

  isChecked(value: string) {
    const values = getParamsValues();
    if (values.includes(value)) {
      return 'checked';
    }

    return '';
  }

  addCheckbox(productCategory: string) {
    let labels = '';
    const categoryValues = getOptions(this.products, productCategory);

    categoryValues.forEach((value) => {
      if (typeof value === 'string') {
        const amount = this.products.filter(
          (product: IProduct) => product[this.category as keyof IProduct] === value
        ).length;

        const filtered = this.filterProducts();
        let count = 0;
        filtered.forEach((item) => {
          for (const key in item) {
            if (item[key as keyof IProduct] === value) {
              count++;
            }
          }
        });

        this.checkedAttr = this.isChecked(value);
        labels += `
        <label class="filters__checkbox">
        <input class="filters__input hide" type="checkbox" name="${this.category}" value="${value}" ${this.checkedAttr}>
        <span class="filters__checkbox-span"></span>${value}
        <div class="filters__checkbox-count" style="margin-left: auto">${count} /&nbsp  </div>
        <div class="filters__checkbox-count" style="width: 2ch; text-align: center;">${amount}</div>
        </label>
        `;
      }
    });
    const legend = `<legend class="filters__subtitle">${this.title}</legend>`;

    return legend + labels;
  }

  filterProductsBySearchValue(products: IProduct[], value: string) {
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

  filterProducts() {
    const brandValue = getParamsSpecificValue('brand') ?? getOptions(PRODUCTS, 'brand');
    const categoryValue = getParamsSpecificValue('category') ?? getOptions(PRODUCTS, 'category');
    const colorValue = getParamsSpecificValue('color') ?? getOptions(PRODUCTS, 'color');
    const minStockValue = getParamsSpecificValue('minStock') ?? '0';
    const maxStockValue = getParamsSpecificValue('maxStock') ?? '100000';
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

  render() {
    const htmlTemplate = this.addCheckbox(this.category);
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterCheckbox;
