import Component from '../component';
import PRODUCTS from '../../data/products';
import { IProduct } from '../../types/interfaces';
import { getParamsValues } from '../../helpers/hash';
import { filterProducts, getPossibleVaulesListByKey } from '../../helpers/filters';

class FilterCheckbox extends Component {
  private allProducts: IProduct[] = [...PRODUCTS];
  private title: string;
  private category: string;
  private checkedAttr: string;

  constructor(tagName: string, className: string, title: string, category: string) {
    super(tagName, className);
    this.title = title;
    this.category = category;
    this.checkedAttr = '';
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
        this.checkedAttr = this.isChecked(value);

        const totalAmount = this.allProducts.filter(
          (product: IProduct) => product[this.category as keyof IProduct] === value
        ).length;

        let detectedAmount = 0;
        const filteredProducts = filterProducts(this.allProducts);
        filteredProducts.forEach((item) => {
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
              ${this.checkedAttr}
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

  render() {
    const htmlTemplate = this.getElementTemplate(this.category);
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterCheckbox;
