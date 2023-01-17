import Component from '../component';
import FilterCheckbox from '../filter/filterCheckbox';
import FilterRange from '../filter/filterRange';
import FilterButtons from '../filter/filterButtons';

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

  getContentNode() {
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
    this.container.append(this.getContentNode());

    return this.container;
  }
}

export default CatalogFilters;
