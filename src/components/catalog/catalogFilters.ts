import Component from '../component';
import FilterCheckbox from '../filter/filterCheckbox';
import FilterButtons from '../filter/filterButtons';
import { addParams, changeHash } from '../../helpers/hash';

class CatalogFilters extends Component {
  public filterBrand: FilterCheckbox;
  public filterCategory: FilterCheckbox;
  public filterColor: FilterCheckbox;
  public filterButtons: FilterButtons;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.filterBrand = new FilterCheckbox('fieldset', 'filters__group', 'Бренд:', 'brand');
    this.filterCategory = new FilterCheckbox(
      'fieldset',
      'filters__group',
      'Категории:',
      'category'
    );
    this.filterColor = new FilterCheckbox('fieldset', 'filters__group', 'Цвет:', 'color');
    this.filterButtons = new FilterButtons('fieldset', 'filters__buttons');
  }

  renderFilters() {
    const container = document.createElement('form');
    container.className = 'filters';

    container.append(this.filterBrand.renderCheckbox());
    container.append(this.filterCategory.renderCheckbox());
    container.append(this.filterColor.renderCheckbox());
    container.append(this.filterButtons.renderCheckbox());

    return container;
  }

  render() {
    this.container = this.renderFilters();
    this.eventListener();
    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('.filters__input').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = <HTMLInputElement>e.target;
        const paramName = target.name;
        const paramValue = target.value;
        addParams(paramName, paramValue);
      });
    });
    this.container.querySelector('.filters__btn-reset')?.addEventListener('click', (e) => {
      e.preventDefault();
      changeHash('');
    });
    this.container.querySelector('.filters__btn-copy')?.addEventListener('click', (e) => {
      e.preventDefault();
      const button = <HTMLButtonElement>e.target;
      button.innerText = 'Успешно';
      const currentLocation = window.location.href;
      navigator.clipboard.writeText(currentLocation);
      setTimeout(() => {
        button.innerText = 'Копировать';
      }, 1000);
    });
  }
}

export default CatalogFilters;
