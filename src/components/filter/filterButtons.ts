import Component from '../component';

class FilterButtons extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  getElementTemplate() {
    const htmlTemplate = `
      <button class="filters__btn filters__btn-reset">Сбросить</button>
      <button class="filters__btn filters__btn-copy">Копировать</button>
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterButtons;
