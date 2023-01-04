import Component from '../component';
import CatalogContent from './catalogContent';
import CatalogFilters from './catalogFilters';

class Catalog extends Component {
  public catalogFilters: CatalogFilters;
  public catalogContent: CatalogContent;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.catalogFilters = new CatalogFilters('aside', 'catalog__fiters filters');
    this.catalogContent = new CatalogContent('article', 'catalog__content');
  }

  render() {
    this.container.append(this.catalogFilters.render());
    this.container.append(this.catalogContent.render());
    return this.container;
  }
}

export default Catalog;
