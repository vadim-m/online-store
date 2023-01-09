import Component from '../component';
import PRODUCTS from '../../data/products';
import { Product } from '../../types/interfaces';
import { getParamsValues } from '../../helpers/hash';
import { getOptions } from '../../helpers/utils';

class FilterCheckbox extends Component {
  private checkboxText = '';
  private category = '';
  private checkedAttr = '';
  private products: Product[] = [...PRODUCTS];

  constructor(tagName: string, className: string, checkboxText: string, category: string) {
    super(tagName, className);
    this.checkboxText = checkboxText;
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
        this.checkedAttr = this.isChecked(value);
        labels += `
        <label class="filters__checkbox">
        <input class="filters__input hide" type="checkbox" name="${this.category}" value="${value}" ${this.checkedAttr}>
        <span class="filters__checkbox-span"></span>${value}
        </label>
        `;
      }
    });
    const legend = `<legend class="filters__subtitle">${this.checkboxText}</legend>`;

    return legend + labels;
  }

  render() {
    const htmlTemplate = this.addCheckbox(this.category);
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterCheckbox;
