import { getParamsSpecificValue, replaceParams } from '../../helpers/hash';
import { getMaxProductValue, getMinProductValue, getOptions } from '../../helpers/utils';
import Component from '../component';
import PRODUCTS from '../../data/products';
import { IProduct } from '../../types/interfaces';

class FilterStock extends Component {
  private currentMinValue: string;
  private curnetMaxValue: string;
  private productsMinValue: string;
  private productsMaxValue: string;
  private products: IProduct[] = [...PRODUCTS];

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.productsMinValue = String(getMinProductValue(this.products, 'stock'));
    this.productsMaxValue = String(getMaxProductValue(this.products, 'stock'));
    this.products = this.filterProducts();
    this.currentMinValue =
      getParamsSpecificValue('minStock') ?? String(getMinProductValue(this.products, 'stock'));
    this.curnetMaxValue =
      getParamsSpecificValue('maxPStock') ?? String(getMaxProductValue(this.products, 'stock'));
  }

  addButtons() {
    const htmlTemplate = `
    <legend class="filters__subtitle">Количество:</legend>
    <div class="range_container">
      <div class="sliders_control">
          <input id="fromSlider" type="range" value="${+this.currentMinValue}" step="1" min="${+this
      .productsMinValue}" max="${+this.productsMaxValue}"/>
          <input id="toSlider" type="range" value="${+this.curnetMaxValue}" step="1" min="${+this
      .productsMinValue}" max="${+this.productsMaxValue}"/>
      </div>
      <div class="form_control">
          <div class="form_control_container">
              <div class="form_control_container__time">Min</div>
              <input class="form_control_container__time__input" type="number" id="fromInput" value="${+this
                .currentMinValue}"min="0" max="100"/>
          </div>
          <div class="form_control_container">
              <div class="form_control_container__time">Max</div>
              <input class="form_control_container__time__input" type="number" id="toInput" value="${+this
                .curnetMaxValue}"min="0" max="100"/>
          </div>
      </div>
    </div>
    `;

    return htmlTemplate;
  }

  controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#d31414', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#d31414', controlSlider);
    this.setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#d31414', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#d31414', toSlider);
    this.setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
        ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
        ${sliderColor} 100%)`;
  }

  setToggleAccessible(currentTarget) {
    const toSlider = <HTMLInputElement>this.container.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = '2';
    } else {
      toSlider.style.zIndex = '0';
    }
  }

  addEvent() {
    const fromSlider = <HTMLInputElement>this.container.querySelector('#fromSlider');
    const toSlider = <HTMLInputElement>this.container.querySelector('#toSlider');
    const fromInput = <HTMLInputElement>this.container.querySelector('#fromInput');
    const toInput = <HTMLInputElement>this.container.querySelector('#toInput');
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#d31414', toSlider);
    this.setToggleAccessible(toSlider);

    fromSlider!.oninput = () => this.controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider!.oninput = () => this.controlToSlider(fromSlider, toSlider, toInput);

    this.container.querySelector('#fromSlider')?.addEventListener('change', (e) => {
      const label = <HTMLSelectElement>e.target;

      const value = label.value;
      replaceParams('minStock', value);
    });

    this.container.querySelector('#toSlider')?.addEventListener('change', (e) => {
      const label = <HTMLSelectElement>e.target;

      const value = label.value;
      replaceParams('maxPStock', value);
    });
  }

  render() {
    const htmlTemplate = this.addButtons();
    this.container.innerHTML = htmlTemplate;
    const value = getMinProductValue(this.products, 'stock');
    const value2 = getMaxProductValue(this.products, 'stock');

    this.addEvent();

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
}

export default FilterStock;
