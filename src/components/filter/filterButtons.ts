import Component from '../component';
import { changeHash } from '../../helpers/hash';

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

  addListeners() {
    this.container.querySelector('.filters__btn-reset')?.addEventListener('click', (e) => {
      e.preventDefault();
      changeHash('');
    });
    this.container.querySelector('.filters__btn-copy')?.addEventListener('click', (e) => {
      e.preventDefault();
      const button = <HTMLButtonElement>e.target;
      button.innerText = 'Успешно!';
      const currentLocation = window.location.href;
      navigator.clipboard.writeText(currentLocation);
      setTimeout(() => {
        button.innerText = 'Копировать';
      }, 1000);
    });
  }

  render() {
    const htmlTemplate = this.getElementTemplate();
    this.container.innerHTML = htmlTemplate;
    this.addListeners();

    return this.container;
  }
}

export default FilterButtons;
