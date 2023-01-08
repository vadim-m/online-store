import Component from '../component';
import CatalogContent from './catalogContent';
import CatalogFilters from './catalogFilters';

class Catalog extends Component {
  public catalogFilters: CatalogFilters;
  public catalogContent: CatalogContent;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.catalogFilters = new CatalogFilters('aside', 'catalog__filters');
    this.catalogContent = new CatalogContent('article', 'catalog__content');
  }

  renderCatalog() {
    const container = document.createElement('div');
    container.className = 'catalog';

    container.append(this.catalogFilters.render());
    container.append(this.catalogContent.render());

    this.container.append(container);
  }

  render() {
    this.renderCatalog();
    return this.container;
  }
}

export default Catalog;
