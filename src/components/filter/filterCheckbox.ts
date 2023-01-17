import Component from '../component';
import PRODUCTS from '../../data/products';
import { IProduct } from '../../types/interfaces';
import { addParams, getParamsValues } from '../../helpers/hash';
import { filterProducts, getPossibleVaulesListByKey } from '../../helpers/filters';

class FilterCheckbox extends Component {
  private allProducts: IProduct[] = [...PRODUCTS];
  private title: string;
  private category: string;

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

  getElementTemplate(productCategory: string) {
    let checkboxLabelsHTML = '';

    const possibleValues = getPossibleVaulesListByKey(this.allProducts, productCategory);
    possibleValues.forEach((value) => {
      if (typeof value === 'string') {
        const totalAmount = this.allProducts.filter(
          (product: IProduct) => product[this.category as keyof IProduct] === value
        ).length;

        let detectedAmount = 0;
        filterProducts(this.allProducts).forEach((item) => {
          for (const key in item) {
            if (item[key as keyof IProduct] === value) {
              detectedAmount++;
            }
          }
        });

        checkboxLabelsHTML += `
          <label class="filters__checkbox">
            <input 
              class="filters__input hide"
              type="checkbox" 
              name="${this.category}"
              value="${value}" 
              ${this.isChecked(value)}
            />
            <span class="filters__checkbox-span"></span>${value}
            <div class="filters__checkbox-count">${detectedAmount}</div>
            <div class="filters__checkbox-divider">&nbsp/</div>
            <div class="filters__checkbox-count">${totalAmount}</div>
          </label>
        `;
      }
    });
    const legendHTML = `<legend class="filters__subtitle">${this.title}</legend>`;

    return legendHTML + checkboxLabelsHTML;
  }

  addListeners() {
    this.container.querySelectorAll('.filters__input').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = <HTMLInputElement>e.target;
        const paramName = target.name;
        const paramValue = target.value;
        addParams(paramName, paramValue);
      });
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate(this.category);
    this.container.innerHTML = htmlTemplate;
    this.addListeners();

    return this.container;
  }
}

export default FilterCheckbox;
