import Component from '../component';
import CatalogSearch from './catalogSearch';
import CatalogSort from './catalogSort';
import CatalogList from './catalogList';
import { replaceParams } from '../../helpers/hash';

class CatalogContent extends Component {
  public catalogSearch: CatalogSearch;
  public catalogSort: CatalogSort;
  public catalogList: CatalogList;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.catalogSearch = new CatalogSearch('section', 'catalog__search');
    this.catalogSort = new CatalogSort('section', 'catalog__sort');
    this.catalogList = new CatalogList('section', 'catalog__list-wrap');
  }

  getContentNode() {
    const container = document.createElement('div');
    container.className = 'catalog__content-wrap';

    container.append(this.catalogSearch.render());
    container.append(this.catalogSort.render());
    container.append(this.catalogList.render());

    return container;
  }

  render() {
    this.container.append(this.getContentNode());
    this.eventListener();
    this.catalogSearch.setFoundProductsAmount.call(this);

    return this.container;
  }

  eventListener() {
    this.container.querySelectorAll('.sort__view').forEach((el) => {
      el.addEventListener('click', (e) => {
        const button = <HTMLButtonElement>e.target;
        const value = button.dataset.view;
        if (value) {
          replaceParams('view', value);
        }
      });
    });
    this.container.querySelector('.sort__select')?.addEventListener('input', (e) => {
      const label = <HTMLSelectElement>e.target;
      const value = label.options[label.selectedIndex].value;
      replaceParams('sort', value);
    });
  }
}

export default CatalogContent;
