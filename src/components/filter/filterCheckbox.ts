import Component from '../component';
import PRODUCTS from '../../data/products';
import { Product } from '../../types/interfaces';
import { getParamsValues } from '../../helpers/hash';

class FilterCheckbox extends Component {
  private filterName = '';
  private category = '';
  private checkedAttr = '';

  constructor(tagName: string, className: string, filterName: string, category: string) {
    super(tagName, className);
    this.filterName = filterName;
    this.category = category;
  }

  isChecked(option: string) {
    const values = getParamsValues();
    if (values.includes(option)) {
      return 'checked';
    }

    return '';
  }

  addCheckbox(productKey: string) {
    const filterOptions = Array.from(
      new Set(PRODUCTS.map((product) => product[productKey as keyof Product]))
    ).sort();

    let htmlTemplate = '';
    filterOptions.forEach((option) => {
      if (typeof option === 'string') {
        this.checkedAttr = this.isChecked(option);
        htmlTemplate += `
          <label class="filters__checkbox" data-filter="${option}">
            <input class="filters__input hide" type="checkbox" name="${this.category}" value="${option}" ${this.checkedAttr}>
            <span class="filters__checkbox-span"></span>${option}
          </label>
        `;
      }
    });

    return htmlTemplate;
  }

  render() {
    const labels = this.addCheckbox(this.category);
    const htmlTemplate = `
      <legend class="filters__subtitle">${this.filterName}</legend>
        ${labels}
    `;
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterCheckbox;
