import Component from '../component';

class SortView extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderViewButtons() {
    const htmlTemplate = `
      <div class="sort__view-wrap">
        <button class="sort__view sort__view-column active"></button>
        <button class="sort__view sort__view-row"></button>
      </div>
    `;
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default SortView;
