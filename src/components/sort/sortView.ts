import Component from '../component';
import { getParamsSpecificValue } from '../../helpers/hash';

class SortView extends Component {
  private buttonActiveClass: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.buttonActiveClass = this.checkViewParam();
  }

  checkViewParam() {
    const viewValue = getParamsSpecificValue('view') ?? 'column';
    return `sort__view-${viewValue}_active`;
  }

  renderViewButtons() {
    this.checkViewParam();
    const htmlTemplate = `
        <button class="sort__view sort__view-column ${this.buttonActiveClass}" data-view="column"></button>
        <button class="sort__view sort__view-row ${this.buttonActiveClass}" data-view="row"></button>
    `;
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default SortView;
