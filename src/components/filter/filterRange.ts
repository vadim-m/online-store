import { getParamsSpecificValue, replaceParams } from '../../helpers/hash';
import { getMaxProductsValue, getMinProductsValue, filterProducts } from '../../helpers/filters';
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
    this.productsMinValue = getMinProductsValue(this.allProducts, this.category).toString();
    this.productsMaxValue = getMaxProductsValue(this.allProducts, this.category).toString();
    this.filteredProducts = filterProducts(this.allProducts);
    this.currentMinValue = this.calcMinValue();
    this.curnetMaxValue = this.calcMaxValue();
  }

  getElementTemplate() {
    const htmlTemplate = `
      <legend class="filters__subtitle">${this.title}</legend>
      <div class="filters__range-container">
        <div class="filters__range-control">
            <input id="fromSlider" type="range" class="filters__range-input"
            value="${this.currentMinValue}" step="${this.rangeStep}" min="${this.productsMinValue}" max="${this.productsMaxValue}"/>

            <input id="toSlider" type="range" class="filters__range-input"
            value="${this.curnetMaxValue}" step="${this.rangeStep}" min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
        </div>
        <div class="filters__values-container">
            <div class="filters__values">
                <div class="filters__values-title">Min</div>
                <input class="filters__number-input" type="number" id="fromInput" value="${this.currentMinValue}"min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
            </div>
            <div class="filters__values">
                <div class="filters__values-title">Max</div>
                <input class="filters__number-input" type="number" id="toInput" value="${this.curnetMaxValue}"min="${this.productsMinValue}" max="${this.productsMaxValue}"/>
            </div>
        </div>
      </div>
    `;

    return htmlTemplate;
  }

  setParamKey(prefix: string) {
    return prefix + this.category[0].toLocaleUpperCase() + this.category.slice(1);
  }

  calcMinValue() {
    return (
      getParamsSpecificValue(this.minParamKey) ??
      getMinProductsValue(this.filteredProducts, this.category).toString()
    );
  }

  calcMaxValue() {
    return (
      getParamsSpecificValue(this.maxParamKey) ??
      getMaxProductsValue(this.filteredProducts, this.category).toString()
    );
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
    controlSlider.style.background = `linear-gradient( to right,
      ${inactiveColor} 0%,
      ${inactiveColor} ${(fromPosition / rangeDistance) * 100}%,
      ${activeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${activeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${inactiveColor} ${(toPosition / rangeDistance) * 100}%, 
      ${inactiveColor} 100%)
    `;
  }

  setToggleAccessible(currentTarget: HTMLInputElement) {
    const toSlider = <HTMLInputElement>this.container.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = '5';
    } else {
      toSlider.style.zIndex = '0';
    }
  }

  addListeners() {
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
    this.addListeners();

    return this.container;
  }
}

export default FilterRange;
