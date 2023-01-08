import Component from '../component';

class SortView extends Component {
  private sortActiveClass = 'hui';

  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderViewButtons() {
    const htmlTemplate = `
        <button class="sort__view sort__view-column active ${this.sortActiveClass}" data-view="column"></button>
        <button class="sort__view sort__view-row" data-view="row"></button>
    `;
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default SortView;
