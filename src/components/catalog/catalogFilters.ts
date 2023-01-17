import Component from '../component';
import FilterCheckbox from '../filter/filterCheckbox';
import FilterRange from '../filter/filterRange';
import FilterButtons from '../filter/filterButtons';
import { addParams, changeHash } from '../../helpers/hash';

class CatalogFilters extends Component {
  public filterBrand: FilterCheckbox;
  public filterCategory: FilterCheckbox;
  public filterColor: FilterCheckbox;
  public filterPrice: FilterRange;
  public filterStock: FilterRange;
  public filterButtons: FilterButtons;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.filterBrand = new FilterCheckbox('fieldset', 'filters__group', 'Бренд:', 'brand');
    this.filterCategory = new FilterCheckbox(
      'fieldset',
      'filters__group',
      'Категория:',
      'category'
    );
    this.filterColor = new FilterCheckbox('fieldset', 'filters__group', 'Цвет:', 'color');
    this.filterPrice = new FilterRange('fieldset', 'filters__group', 'Цена:', 'price', '50');
    this.filterStock = new FilterRange('fieldset', 'filters__group', 'Количество:', 'stock', '1');
    this.filterButtons = new FilterButtons('fieldset', 'filters__buttons');
  }

  renderFilters() {
    const container = document.createElement('form');
    container.className = 'filters';

    container.append(this.filterBrand.render());
    container.append(this.filterCategory.render());
    container.append(this.filterPrice.render());
    container.append(this.filterStock.render());
    container.append(this.filterColor.render());
    container.append(this.filterButtons.render());

    return container;
  }

  render() {
    this.container.append(this.renderFilters());
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
      button.innerText = 'Успешно!';
      const currentLocation = window.location.href;
      navigator.clipboard.writeText(currentLocation);
      setTimeout(() => {
        button.innerText = 'Копировать';
      }, 1000);
    });
  }
}

export default CatalogFilters;
