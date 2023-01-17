import { getParamsSpecificValue, replaceParams } from '../../helpers/hash';
import { getMaxProductValue, getMinProductValue, getOptions } from '../../helpers/utils';
import Component from '../component';
import PRODUCTS from '../../data/products';
import { IProduct } from '../../types/interfaces';

class FilterRange extends Component {
  private allProducts: IProduct[] = [...PRODUCTS];
  private filteredProducts: IProduct[];
  private currentMinValue: string;
  private curnetMaxValue: string;
  private productsMinValue: string;
  private productsMaxValue: string;
  private title: string;
  private category: string;
  private minParamKey: string;
  private maxParamKey: string;
  private rangeStep: string;

  constructor(
    tagName: string,
    className: string,
    title: string,
    category: string,
    rangeStep: string
  ) {
    super(tagName, className);
    this.title = title;
    this.category = category;
    this.rangeStep = rangeStep;
    this.minParamKey = this.setParamKey('min');
    this.maxParamKey = this.setParamKey('max');
    this.productsMinValue = getMinProductValue(this.allProducts, this.category).toString();
    this.productsMaxValue = getMaxProductValue(this.allProducts, this.category).toString();
    this.filteredProducts = this.filterProducts();
    this.currentMinValue = this.calcMinValue();
    this.curnetMaxValue = this.calcMaxValue();
  }

  setParamKey(prefix: string) {
    return prefix + this.category[0].toLocaleUpperCase() + this.category.slice(1);
  }

  calcMinValue() {
    return (
      getParamsSpecificValue(this.minParamKey) ??
      getMinProductValue(this.filteredProducts, this.category).toString()
    );
  }

  calcMaxValue() {
    return (
      getParamsSpecificValue(this.maxParamKey) ??
      getMaxProductValue(this.filteredProducts, this.category).toString()
    );
  }

  getElementTemplate() {
    const htmlTemplate = `
      <legend class="filters__subtitle">${this.title}</legend>
      <div class="range_container">
        <div class="sliders_control">
            <input id="fromSlider" type="range" value="${this.currentMinValue}" step="${this.rangeStep}" min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
            <input id="toSlider" type="range" value="${this.curnetMaxValue}" step="${this.rangeStep}" min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
        </div>
        <div class="form_control">
            <div class="form_control_container">
                <div class="form_control_container__time">Min</div>
                <input class="form_control_container__time__input" type="number" id="fromInput" value="${this.currentMinValue}"min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
            </div>
            <div class="form_control_container">
                <div class="form_control_container__time">Max</div>
                <input class="form_control_container__time__input" type="number" id="toInput" value="${this.curnetMaxValue}"min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
            </div>
        </div>
      </div>
    `;

    return htmlTemplate;
  }

  controlFromSlider(
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    fromInput: HTMLInputElement
  ) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, toSlider);
    if (from > to) {
      fromSlider.value = to.toString();
      fromInput.value = to.toString();
    } else {
      fromInput.value = from.toString();
    }
  }

  controlToSlider(
    fromSlider: HTMLInputElement,
    toSlider: HTMLInputElement,
    toInput: HTMLInputElement
  ) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, toSlider);
    this.setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to.toString();
      toInput.value = to.toString();
    } else {
      toInput.value = from.toString();
      toSlider.value = from.toString();
    }
  }

  getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from: number = parseInt(currentFrom.value, 10);
    const to: number = parseInt(currentTo.value, 10);
    return [from, to];
  }

  fillSlider(from: HTMLInputElement, to: HTMLInputElement, controlSlider: HTMLInputElement) {
    const rangeDistance: number = +to.max - +to.min;
    const fromPosition: number = +from.value - +to.min;
    const toPosition: number = +to.value - +to.min;
    const inactiveColor = '#c6c6c6';
    const activeColor = '#d31414';
    controlSlider.style.background = `linear-gradient(
        to right,
        ${inactiveColor} 0%,
        ${inactiveColor} ${(fromPosition / rangeDistance) * 100}%,
        ${activeColor} ${(fromPosition / rangeDistance) * 100}%,
        ${activeColor} ${(toPosition / rangeDistance) * 100}%, 
        ${inactiveColor} ${(toPosition / rangeDistance) * 100}%, 
        ${inactiveColor} 100%)`;
  }

  setToggleAccessible(currentTarget: HTMLInputElement) {
    const toSlider = <HTMLInputElement>this.container.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = '5';
    } else {
      toSlider.style.zIndex = '0';
    }
  }

  listen() {
    const fromSlider = <HTMLInputElement>this.container.querySelector('#fromSlider');
    const toSlider = <HTMLInputElement>this.container.querySelector('#toSlider');
    const fromInput = <HTMLInputElement>this.container.querySelector('#fromInput');
    const toInput = <HTMLInputElement>this.container.querySelector('#toInput');
    this.fillSlider(fromSlider, toSlider, toSlider);
    this.setToggleAccessible(toSlider);

    fromSlider?.addEventListener('change', (e) => {
      const label = <HTMLSelectElement>e.target;
      const value = label.value;
      replaceParams(this.minParamKey, value);
    });

    toSlider?.addEventListener('change', (e) => {
      const label = <HTMLSelectElement>e.target;
      const value = label.value;
      replaceParams(this.maxParamKey, value);
    });

    fromSlider?.addEventListener('input', () => {
      this.controlFromSlider(fromSlider, toSlider, fromInput);
    });

    toSlider?.addEventListener('input', () => {
      this.controlToSlider(fromSlider, toSlider, toInput);
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.listen();

    return this.container;
  }

  // filtered
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
}

export default FilterRange;
