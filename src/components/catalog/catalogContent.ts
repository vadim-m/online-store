import Component from '../component';
import CatalogSearch from './catalogSearch';
import CatalogSort from './catalogSort';
import CatalogList from './catalogList';

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
    this.catalogSearch.setFoundProductsAmount.call(this);

    return this.container;
  }
}

export default CatalogContent;
