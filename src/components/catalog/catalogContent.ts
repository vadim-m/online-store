import Component from '../component';
import CatalogSearch from './catalogSearch';
import CatalogSort from './catalogSort';
import CatalogList from './catalogList';
import { replaceParams } from '../../helpers/hash'

class CatalogContent extends Component {
  public catalogSearch: CatalogSearch;
  public catalogSort: CatalogSort;
  public catalogItems: CatalogList;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.catalogSearch = new CatalogSearch('section', 'catalog__search search');
    this.catalogSort = new CatalogSort('section', 'catalog__sort sort');
    this.catalogItems = new CatalogList('section', 'catalog__list-wrap');
  }

  renderContent() {
    this.container.append(this.catalogSearch.renderSearch());
    this.container.append(this.catalogSort.renderSort());
    this.container.append(this.catalogItems.renderItems());
  }

  render() {
    this.renderContent();
    this.eventListener();

    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('.sort__view').forEach((el) => {
      el.addEventListener('click', (e) => {
        const button = <HTMLButtonElement>e.target;
        const value = button.dataset.view!;
        replaceParams('sort', value);
      });
    });
    this.container.querySelector('.sort__select')?.addEventListener('change', (e) => {
      const label = <HTMLSelectElement>e.target;
      console.log(label.options[label.selectedIndex].value);
    });
  }
}

export default CatalogContent;
