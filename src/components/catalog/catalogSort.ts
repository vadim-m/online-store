import Component from '../component';
import SortView from '../sort/sortView';
import SortLabel from '../sort/sortLabel';

class CatalogSort extends Component {
  public viewButtons: SortView;
  public sortSelect: SortLabel;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.viewButtons = new SortView('div', 'sort__view-wrap');
    this.sortSelect = new SortLabel('div', 'sort__label-wrap');
  }

  renderSort() {
    const container = document.createElement('section');
    container.className = 'catalog__sort sort';
    container.append(this.viewButtons.renderViewButtons());
    container.append(this.sortSelect.renderSortLabel());

    return container;
  }
}

export default CatalogSort;
