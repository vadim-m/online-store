import Component from '../component';

class FilterButtons extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  addButtons() {
    const htmlTemplate = `
      <button class="filters__btn">Сбросить</button>
      <button class="filters__btn">Копировать</button>
    `;

    return htmlTemplate;
  }

  renderCheckbox() {
    const htmlTemplate = this.addButtons();
    this.container.innerHTML = htmlTemplate;

    return this.container;
  }
}

export default FilterButtons;
