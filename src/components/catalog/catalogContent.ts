import Component from '../component';
import CatalogList from '../../components/catalog/catalogList';

class CatalogContent extends Component {
  public catalogItems: CatalogList;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.catalogItems = new CatalogList('div', 'products__items');
  }

  render() {
    this.container.append(this.catalogItems.renderItems());
    return this.container;
  }
}

export default CatalogContent;
