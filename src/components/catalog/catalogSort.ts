import Component from '../component';
import SortView from '../sort/sortView';
import SortSelect from '../sort/sortSelect';

class CatalogSort extends Component {
  public sortView: SortView;
  public sortSelect: SortSelect;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.sortView = new SortView('div', 'sort__view-wrap');
    this.sortSelect = new SortSelect('div', 'sort__label-wrap');
  }

  addSort() {
    const container = document.createElement('div');
    container.className = 'sort';

    container.append(this.sortView.render());
    container.append(this.sortSelect.render());

    return container;
  }

  render() {
    this.container.append(this.addSort());

    return this.container;
  }
}

export default CatalogSort;
