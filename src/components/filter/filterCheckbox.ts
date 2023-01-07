import Component from '../component';
import PRODUCTS from '../../data/products';

class FilterCheckbox extends Component {
  private filterName = '';
  private category = '';

  constructor(tagName: string, className: string, filterName: string, category: string) {
    super(tagName, className);
    this.filterName = filterName;
    this.category = category;
  }

  addCheckbox(productKey: string) {
    const filterOptions = Array.from(
      new Set(PRODUCTS.map((product) => product[productKey]))
    ).sort();

    let htmlTemplate = '';
    filterOptions.forEach((option) => {
      htmlTemplate += `
        <label class="filters__checkbox" data-filter="${option}">
          <input class="filters__input hide" type="checkbox" name="${this.category}" value="${option}">
          <span class="filters__checkbox-span"></span>${option}
        </label>
      `;
    });

    return htmlTemplate;
  }

  renderCheckbox() {
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
