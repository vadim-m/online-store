import { getParamsSpecificValue } from '../../helpers/hash';
import { sortOptions } from '../../types/constants';
import { labelOption } from '../../types/types';
import Component from '../component';

class SortSelect extends Component {
  private sortOptions: labelOption[];

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.sortOptions = [...sortOptions];
  }

  checkSortParam() {
    return getParamsSpecificValue('sort') ?? 'default';
  }

  getSortingOptions(options: labelOption[]) {
    const sortParamValue = this.checkSortParam();

    let htmlTemplate = '';
    options.forEach((option) => {
      const isSelectted = sortParamValue === option.value ? 'selected' : '';

      htmlTemplate += `
        <option value="${option.value}" ${isSelectted}>${option.text}</option>
      `;
    });

    return htmlTemplate;
  }

  addSortSelect() {
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

  render() {
    const htmlTemplate = this.addSortSelect();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default SortSelect;
