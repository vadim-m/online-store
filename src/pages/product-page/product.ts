import Page from '../../components/page';
import ProductFull from '../../components/products/productFull';
import { getParamsSpecificValue } from '../../helpers/hash';

class ProductPage extends Page {
  private product: ProductFull;

  constructor(className: string) {
    super(className);
    this.product = new ProductFull('div', 'container', this.getId() as number);
  }

  getId() {
    const id = getParamsSpecificValue('id');

    if (id) return +id;
  }

  render() {
    this.appendBlock(this.product.render());
    return this.mainEl;
  }
}

export default ProductPage;
