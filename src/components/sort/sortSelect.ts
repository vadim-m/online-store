import { getParamsSpecificValue, replaceParams } from '../../helpers/hash';
import { sortOptions } from '../../types/constants';
import { labelOption } from '../../types/types';
import Component from '../component';

class SortSelect extends Component {
  private sortOptions: labelOption[];
  private sortParamValue: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.sortOptions = [...sortOptions];
    this.sortParamValue = this.checkSortParam();
  }

  checkSortParam() {
    return getParamsSpecificValue('sort') ?? 'default';
  }

  getSortingOptions(options: labelOption[]) {
    let htmlTemplate = '';
    options.forEach((option) => {
      const selectedAttr = this.sortParamValue === option.value ? 'selected' : '';

      htmlTemplate += `
        <option value="${option.value}" ${selectedAttr}>${option.text}</option>
      `;
    });

    return htmlTemplate;
  }

  getElementTemplate() {
    const options = this.getSortingOptions(this.sortOptions);

    const htmlTemplate = `
      <label class="sort__label">Сортировать:
        <select class="sort__select">
          ${options}
        </select>
      </label>
    `;

    return htmlTemplate;
  }

  addListeners() {
    this.container.querySelector('.sort__select')?.addEventListener('input', (e) => {
      const label = <HTMLSelectElement>e.target;
      const value = label.options[label.selectedIndex].value;
      replaceParams('sort', value);
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.addListeners();

    return this.container;
  }
}

export default SortSelect;
