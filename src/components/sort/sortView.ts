import Component from '../component';
import { getParamsSpecificValue, replaceParams } from '../../helpers/hash';

class SortView extends Component {
  private viewActiveType: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.viewActiveType = this.checkViewParam();
  }

  checkViewParam() {
    const viewValue = getParamsSpecificValue('view') ?? 'column';
    return `sort__view-${viewValue}_active`;
  }

  getElementTemplate() {
    const htmlTemplate = `
      <button class="sort__view sort__view-column ${this.viewActiveType}" data-view="column"></button>
      <button class="sort__view sort__view-row ${this.viewActiveType}" data-view="row"></button>
    `;

    return htmlTemplate;
  }

  addListeners() {
    this.container.querySelectorAll('.sort__view').forEach((el) => {
      el.addEventListener('click', (e) => {
        const button = <HTMLButtonElement>e.target;
        const value = button.dataset.view;
        if (value) {
          replaceParams('view', value);
        }
      });
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.addListeners();

    return this.container;
  }
}

export default SortView;
