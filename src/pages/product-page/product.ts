import Page from '../../components/page';
import ProductBreadcrumbs from '../../components/products/productBreadcrumbs';
import ProductFull from '../../components/products/productFull';
import { getParamsSpecificValue } from '../../helpers/hash';
ProductBreadcrumbs;

class ProductPage extends Page {
  private breadcrumbs: ProductBreadcrumbs;
  private product: ProductFull;

  constructor(className: string) {
    super(className);
    this.product = new ProductFull('div', 'container', this.getId() as number);
    this.breadcrumbs = new ProductBreadcrumbs('div', 'container', this.getId() as number);
  }

  getId() {
    const id = getParamsSpecificValue('id');

    if (id) return +id;
  }

  render() {
    this.appendBlock(this.breadcrumbs.render());
    this.appendBlock(this.product.render());
    return this.mainEl;
  }
}

export default ProductPage;
