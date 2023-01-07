import Component from '../component';
import FilterCheckbox from '../filter/filterCheckbox';

class CatalogFilters extends Component {
  public filterBrand: FilterCheckbox;
  public filterCategory: FilterCheckbox;
  public filterColor: FilterCheckbox;

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
  }

  renderFilters() {
    const container = document.createElement('form');
    container.className = 'filters';

    container.append(this.filterBrand.renderCheckbox());
    container.append(this.filterCategory.renderCheckbox());
    container.append(this.filterColor.renderCheckbox());

    return container;
  }

  render() {
    this.container = this.renderFilters();
    this.eventListener();
    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('.filters__input').forEach((el) => {
      el.addEventListener('click', (event) => {
        console.log(event.target); 
      });
    })
  }
}

export default CatalogFilters;
